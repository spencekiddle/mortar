function mortar() {
	var wnWdth = $(window).width(), // window width
		crntRw = 1, // current row index
		rwWdth = 0, // row width
		rwImgCnt = 0, // count o frow images
		rwImgs = [], // array of row images
		imgHght = 0, // image height
		rwRmndr = 0, // row remainder in px
		rwHght = 0, // row height
		dnm = 0, // denominator
		ttl = 0; // total number of images
	console.log("Laying Brick");
	ttl = $('img').length;
	$('img').each(function(i, el){
		if ( (rwWdth + $(this).outerWidth(true) > wnWdth) || (i === ttl - 1 ) ){
			rwRmndr = wnWdth-rwWdth;
			console.log("Pixels remaining in row %i",rwRmndr);
			if (rwRmndr > 6) {
				$(rwImgs).each(function(i, el){
					//dnm += $(this).outerWidth(true)/$(this).outerHeight(true);
					console.debug($(this).width(), $(this).innerWidth(), $(this).outerWidth(), $(this).outerWidth(true));
					imgHght += ($(this).outerHeight(true) - $(this).innerHeight());
					dnm += $(this).outerWidth(true)/$(this).outerHeight(true);
					console.debug(dnm);
					//imgHght  = $(this).outerHeight - $(this).height();
				});
				imgHght = imgHght / rwImgCnt;
				rwHght = wnWdth / dnm;
				$(rwImgs).height(Math.floor(rwHght - imgHght));
				console.log("rowHeight = %i, wnWdth = %i, denominator = %i", rwHght, wnWdth, dnm);
				console.log(rwHght, wnWdth, dnm);
				console.warn(Math.floor(rwHght - imgHght) +', '+(rwHght - imgHght));
			}
			crntRw++;
			rwWdth = 0;
			rwImgCnt = 0;
			rwImgs = [];
			rwRmndr = 0;
			rwHght = 0;
			dnm = 0;
			console.log('New Row');
		}
		rwImgCnt++;
		rwImgs.push(this);
		rwWdth += $(this).outerWidth(true);
		console.log("Row[%i] Images[%i] - rowWidth = %i, windowWidth = %i",crntRw,rwImgCnt,rwWdth,wnWdth);
		//console.log($(this).width());
	});

}
//$(window).load(mortar());
$(window).resize(function(){mortar()});
$(window).resize(function(){console.log('Resizing')});
