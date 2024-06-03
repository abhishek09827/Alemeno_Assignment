import cv2
import numpy as np
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

# __define-ocg__
class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_obj = request.data['file']
        file_name = default_storage.save(file_obj.name, ContentFile(file_obj.read()))
        file_path = default_storage.path(file_name)

        # Process the image using OpenCV
        image = cv2.imread(file_path)
        colors = self.process_image(image)

        # Clean up
        default_storage.delete(file_name)
        print({"colors": colors})

        return Response({"colors": colors})

    def process_image(self, image):
        # Assuming the image has 10 distinct regions corresponding to the colors
        h, w, _ = image.shape
        strip_height = h // 10
        colors = []

        for i in range(10):
            region = image[strip_height * i:strip_height * (i + 1), :, :]
            avg_color = cv2.mean(region)[:3]
            colors.append({
                "r": int(avg_color[2]),
                "g": int(avg_color[1]),
                "b": int(avg_color[0])
            })  # Convert to RGB

        return colors
