from django.conf.urls import patterns, include, url
from rest_framework.routers import DefaultRouter
import views

router = DefaultRouter()
router.register(r'store', views.StoreViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'page', views.PageViewSet)

urlpatterns = patterns(
    '',
    url(r'^', include(router.urls)),
    url(r'^tile$', views.TileViewSetBulk.as_view()),
    url(r'^tile/(?P<pk>[0-9]+)/(?P<method>[\w\-]+)$', views.TileDetail.as_view()),
    url(r'^tile/(?P<pk>[0-9]+)/$', views.TileDetail.as_view()),
)
