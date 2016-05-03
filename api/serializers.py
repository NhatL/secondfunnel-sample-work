from rest_framework import serializers
from rest_framework_bulk import BulkListSerializer, BulkSerializerMixin


class JSONSerializerField(serializers.Field):

    """ Serializer for JSONField -- required to make field writable"""

    def to_internal_value(self, data):
        return data

    def to_representation(self, value):
        return value


class StoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Store
        fields = ('id', 'name', 'description', 'display_out_of_stock', 'default_theme', 'default_page')


class ProductSerializer(serializers.ModelSerializer):
    attributes = JSONSerializerField()

    class Meta:
        model = Product
        fields = ('id', 'store', 'name', 'description', 'details', 'url', 'sku', 'price', 'sale_price',
                  'currency', 'default_image', 'in_stock', 'attributes', 'similar_products')


class ContentSerializer(serializers.ModelSerializer):
    attributes = JSONSerializerField()

    class Meta:
        model = Content
        fields = ('id', 'store', 'name', 'description', 'url', 'source', 'source_url', 'tagged_products',
                  'attributes', 'status')


class PageSerializer(serializers.ModelSerializer):
    theme_settings = JSONSerializerField()
    dashboard_settings = JSONSerializerField()

    class Meta:
        model = Page
        fields = ('id', 'store', 'name', 'theme', 'theme_settings', 'description', 'legal_copy', 'last_published_at')


class TileSerializerBulk(BulkSerializerMixin, serializers.ModelSerializer):
    attributes = JSONSerializerField()

    class Meta:
        model = Tile
        fields = ('id', 'template', 'products', 'content', 'priority', 'clicks', 'views', 'placeholder', 'in_stock', 'attributes')
        list_serializer_class = BulkListSerializer
