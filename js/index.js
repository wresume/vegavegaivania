// CAJAS
	var d, loadingBox,
		triangleBground, cx1, cy1, cx2, cy2, cx3, cy3;
// ARCHIVO
	d = document;
	loadingBox = d.getElementById('Loading-box');
	triangleBground = d.getElementsByClassName('triangle-bground');

// MÉTODOS
	function remSpinCircles(delay){
		setTimeout(function(){
			loadingBox.style = 'transform: translate(0,3rem); opacity: 0; transition: .5s;';
			setTimeout(function(){
				loadingBox.style = 'display: none; transform: translate(0,0);';
			}, delay)
		}, delay)
	};

	function polygonPts(){
		coordX = window.innerWidth;
		coordY = window.innerHeight;
		cx1 = 0; cy1 = 0; cx2 = coordX - (coordX / 3); cy2 = 0; cx3 = 0; cy3 = 75;
		setTimeout(function(){
			triangleBground[0].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
			cx2 = (coordX - (coordX / 3)) - 25; cy3 = 65;
			setTimeout(function(){
				triangleBground[1].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
				cx1 = coordX / 2; cx2 = coordX; cx3 = coordX; cy3 = 75;
				setTimeout(function(){
					triangleBground[2].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
					cx1 = (coordX / 2) + 25; cy3 = 65;
					setTimeout(function(){
						triangleBground[3].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
						cx1 = (coordX / 3) - (coordX / 3); cx2 = (coordX / 3) + (coordX / 2); cx3 = coordX / 2;
						setTimeout(function(){
							triangleBground[4].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
							cx1 = (coordX / 3) - (coordX / 3) + 25; cx2 = (coordX / 3) + (coordX / 2) - 25; cx3 = (coordX / 2); cy3 -= 10;
							setTimeout(function(){
								triangleBground[5].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
								cx1 = 0; cy1 = 0; cx2 = ((coordX / 3) + (coordX / 3)) / 2; cy2 = 75; cx3 = 0; cy3 = 75;
								setTimeout(function(){
									triangleBground[6].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
									cx1 -= 25; cx2 -= 25;
									setTimeout(function(){
										triangleBground[7].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
										cx1 = coordX; cx2 = coordX; cx3 = coordX / 4;
										setTimeout(function(){
											triangleBground[8].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
											cy1 += 15; cx3 += 25;
											setTimeout(function(){
												triangleBground[9].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
												cx1 = (coordX / 2) - (coordX / 5); cy1 = 0; cx3 = 0;
												setTimeout(function(){
													triangleBground[10].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
													cy1 += 15; cx3 += 25; cx2 -= 25;
													setTimeout(function(){
														triangleBground[11].setAttribute('points', cx1+','+cy1+' '+cx2+','+cy2+' '+cx3+','+cy3);
													}, 185);
												}, 185);
											}, 185);
										}, 185);
									}, 185);
								}, 185);
							}, 185);
						}, 185);
					}, 185);
				}, 185);
			}, 185);
		}, 185);
	};

// EVENTOS
	remSpinCircles(2300);
	polygonPts();

// DEDICADO
	window.oncontextmenu = function(){
		return false;
	};

	window.addEventListener('resize', function(){
		polygonPts();
	});