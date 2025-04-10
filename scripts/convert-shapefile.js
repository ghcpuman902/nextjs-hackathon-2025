const shapefile = require('shapefile')
const fs = require('fs')
const path = require('path')

async function convertShapefile() {
  try {
    const source = path.join(__dirname, '../public/ne_110m_land/ne_110m_land.shp')
    const target = path.join(__dirname, '../public/ne_110m_land/ne_110m_land.json')

    console.log('Reading shapefile...')
    const geojson = await shapefile.read(source)
    
    console.log('Writing GeoJSON...')
    fs.writeFileSync(target, JSON.stringify(geojson, null, 2))
    
    console.log('Conversion complete!')
  } catch (error) {
    console.error('Error converting shapefile:', error)
  }
}

convertShapefile() 