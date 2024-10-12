ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11056640.607708, -5839774.968860, 21957553.882914, 16623892.744688]);
var wms_layers = [];

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
  title: "OpenStreetMap",
  //'type': 'base',
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions: " ",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  }),
});
var lyr_ne_10m_lakes_1 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_lakes",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_lakes",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_lakes_1, 1]);
var lyr_ne_10m_lakes_australia_2 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_lakes_australia",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_lakes_australia",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_lakes_australia_2, 1]);
var lyr_ne_10m_lakes_europe_3 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_lakes_europe",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_lakes_europe",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_lakes_europe_3, 1]);
var lyr_ne_10m_lakes_historic_4 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_lakes_historic",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_lakes_historic",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_lakes_historic_4, 1]);
var lyr_ne_10m_lakes_north_america_5 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_lakes_north_america",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_lakes_north_america",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_lakes_north_america_5, 1]);
var lyr_ne_10m_land_6 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_land",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_land",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_land_6, 1]);
var lyr_ne_10m_land_ocean_label_points_7 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_land_ocean_label_points",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_land_ocean_label_points",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_land_ocean_label_points_7, 1]);
var lyr_ne_10m_minor_islands_label_points_8 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_minor_islands_label_points",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_minor_islands_label_points",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_minor_islands_label_points_8, 1]);
var lyr_ne_10m_ocean_scale_rank_9 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_ocean_scale_rank",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_ocean_scale_rank",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_ocean_scale_rank_9, 1]);
var lyr_ne_10m_playas_10 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_playas",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_playas",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_playas_10, 1]);
var lyr_ne_10m_reefs_11 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_reefs",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_reefs",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_reefs_11, 1]);
var lyr_ne_10m_rivers_australia_12 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_rivers_australia",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_rivers_australia",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_rivers_australia_12, 1]);
var lyr_ne_10m_rivers_north_america_13 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_rivers_north_america",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_rivers_north_america",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_rivers_north_america_13, 1]);
var lyr_ne_10m_rivers_lake_centerlines_scale_rank_14 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_rivers_lake_centerlines_scale_rank",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_rivers_lake_centerlines_scale_rank",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_rivers_lake_centerlines_scale_rank_14, 1]);
var lyr_ne_10m_rivers_lake_centerlines_15 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_rivers_lake_centerlines",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_rivers_lake_centerlines",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_rivers_lake_centerlines_15, 1]);
var lyr_ne_10m_rivers_europe_16 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://localhost:8080/geoserver/WebGIS/wms",
    attributions: " ",
    params: {
      LAYERS: "ne_10m_rivers_europe",
      TILED: "true",
      VERSION: "1.3.0",
    },
  }),
  title: "ne_10m_rivers_europe",
  opacity: 1.0,
});
wms_layers.push([lyr_ne_10m_rivers_europe_16, 1]);

lyr_OpenStreetMap_0.setVisible(true);
lyr_ne_10m_lakes_1.setVisible(true);
lyr_ne_10m_lakes_australia_2.setVisible(false);
lyr_ne_10m_lakes_europe_3.setVisible(false);
lyr_ne_10m_lakes_historic_4.setVisible(false);
lyr_ne_10m_lakes_north_america_5.setVisible(false);
lyr_ne_10m_land_6.setVisible(false);
lyr_ne_10m_land_ocean_label_points_7.setVisible(false);
lyr_ne_10m_minor_islands_label_points_8.setVisible(false);
lyr_ne_10m_ocean_scale_rank_9.setVisible(false);
lyr_ne_10m_playas_10.setVisible(false);
lyr_ne_10m_reefs_11.setVisible(false);
lyr_ne_10m_rivers_australia_12.setVisible(false);
lyr_ne_10m_rivers_north_america_13.setVisible(false);
lyr_ne_10m_rivers_lake_centerlines_scale_rank_14.setVisible(false);
lyr_ne_10m_rivers_lake_centerlines_15.setVisible(false);
lyr_ne_10m_rivers_europe_16.setVisible(false);
var layersList = [
  lyr_OpenStreetMap_0,
  lyr_ne_10m_lakes_1,
  lyr_ne_10m_lakes_australia_2,
  lyr_ne_10m_lakes_europe_3,
  lyr_ne_10m_lakes_historic_4,
  lyr_ne_10m_lakes_north_america_5,
  lyr_ne_10m_land_6,
  lyr_ne_10m_land_ocean_label_points_7,
  lyr_ne_10m_minor_islands_label_points_8,
  lyr_ne_10m_ocean_scale_rank_9,
  lyr_ne_10m_playas_10,
  lyr_ne_10m_reefs_11,
  lyr_ne_10m_rivers_australia_12,
  lyr_ne_10m_rivers_north_america_13,
  lyr_ne_10m_rivers_lake_centerlines_scale_rank_14,
  lyr_ne_10m_rivers_lake_centerlines_15,
  lyr_ne_10m_rivers_europe_16,
];
