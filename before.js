this.STICKER_SHIFT = '7px'
this.STICKER_COLOR = 'rgba(0, 0, 0, 0.58)'
this.PINK = `rgb(250, 155, 217)`
this.PINK2 = `rgb(235, 178, 215)`
this.title = esc`Jenn Jenn's Page`
this.image = esc`https://xyz-jenn.github.io/preview.avif`
let a = await get('./preview.avif').then(o=>o.meta())
this.width = a.width
this.height = a.height
this.themeColor = '#fa9bd9'