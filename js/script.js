// JavaScript File
/*global $*/

var count = 0;
var negCount;

function isPhoto1() {
    $("#photo1").show();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

isPhoto1();

function isPhoto2() {
    $("#photo2").show();
    $("#photo1").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto3() {
    $("#photo3").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto4() {
    $("#photo4").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto5() {
    $("#photo5").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto6() {
    $("#photo6").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto7() {
    $("#photo7").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo8").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto8() {
    $("#photo8").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo9").hide();
    $("#photo10").hide();
}

function isPhoto9() {
    $("#photo9").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo10").hide();
}

function isPhoto10() {
    $("#photo10").show();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();
    $("#photo4").hide();
    $("#photo5").hide();
    $("#photo6").hide();
    $("#photo7").hide();
    $("#photo8").hide();
    $("#photo9").hide();
}

$("#left").click(function() {
    count = count - 1;
    if(count < 0) {
        negCount = Math.abs(count);
        if(negCount % 10 === 0) {
            isPhoto1();
        }
        
        if(negCount % 10 === 1) {
            isPhoto10();
        }
        
        if(negCount % 10 === 2) {
            isPhoto9();
        }
        
        if(negCount % 10 === 3) {
            isPhoto8();
        }
        
        if(negCount % 10 === 4) {
            isPhoto7();
        }
        
        if(negCount % 10 === 5) {
            isPhoto6();
        }
        
        if(negCount % 10 === 6) {
            isPhoto5();
        }
        
        if(negCount % 10 === 7) {
            isPhoto4();
        }
        
        if(negCount % 10 === 8) {
            isPhoto3();
        }
        
        if(negCount % 10 === 9) {
            isPhoto2();
        }
    }
    
    if(count % 10 === 0) {
        isPhoto1();
    }
    
    if(count % 10 === 1) {
        isPhoto2();
    }
    
    if(count % 10 === 2) {
        isPhoto3();
    }
    
    if(count % 10 === 3) {
        isPhoto4();
    }
    
    if(count % 10 === 4) {
        isPhoto5();
    }
    
    if(count % 10 === 5) {
        isPhoto6();
    }
    
    if(count % 10 === 6) {
        isPhoto7();
    }
    
    if(count % 10 === 7) {
        isPhoto8();
    }
    
    if(count % 10 === 8) {
        isPhoto9();
    }
    
    if(count % 10 === 9) {
        isPhoto10();
    }
});

$("#right").click(function() {
    count = count + 1;
    if(count < 0) {
        negCount = Math.abs(count);
        if(negCount % 10 === 0) {
            isPhoto1();
        }
        
        if(negCount % 10 === 1) {
            isPhoto10();
        }
        
        if(negCount % 10 === 2) {
            isPhoto9();
        }
        
        if(negCount % 10 === 3) {
            isPhoto8();
        }
        
        if(negCount % 10 === 4) {
            isPhoto7();
        }
        
        if(negCount % 10 === 5) {
            isPhoto6();
        }
        
        if(negCount % 10 === 6) {
            isPhoto5();
        }
        
        if(negCount % 10 === 7) {
            isPhoto4();
        }
        
        if(negCount % 10 === 8) {
            isPhoto3();
        }
        
        if(negCount % 10 === 9) {
            isPhoto2();
        }
    }
    
    if(count % 10 === 0) {
        isPhoto1();
    }
    
    if(count % 10 === 1) {
        isPhoto2();
    }
    
    if(count % 10 === 2) {
        isPhoto3();
    }
    
    if(count % 10 === 3) {
        isPhoto4();
    }
    
    if(count % 10 === 4) {
        isPhoto5();
    }
    
    if(count % 10 === 5) {
        isPhoto6();
    }
    
    if(count % 10 === 6) {
        isPhoto7();
    }
    
    if(count % 10 === 7) {
        isPhoto8();
    }
    
    if(count % 10 === 8) {
        isPhoto9();
    }
    
    if(count % 10 === 9) {
        isPhoto10();
    }
});







function hideAlbums() {
    $(".pray").hide();
    $(".bachelor").hide();
    $(".weird").hide();
    $(".vices").hide();
    $(".odd").hide();
    $(".fever").hide();
}

hideAlbums();

$("#pray").click(function() {
    hideAlbums();
    $("#albumRow1").hide();
    $("#albumRow2").hide();
    $(".pray").show();
    $("#back1").show();
});

$("#bachelor").click(function() {
    hideAlbums();
    $("#albumRow1").hide();
    $("#albumRow2").hide();
    $(".bachelor").show();
    $("#back1").show();
});

$("#weird").click(function() {
    hideAlbums();
    $("#albumRow1").hide();
    $("#albumRow2").hide();
    $(".weird").show();
    $("#back1").show();
});

$("#vices").click(function() {
    hideAlbums();
    $("#albumRow1").hide();
    $("#albumRow2").hide();
    $(".vices").show();
    $("#back1").show();
});

$("#odd").click(function() {
    hideAlbums();
    $("#albumRow1").hide();
    $("#albumRow2").hide();
    $(".odd").show();
    $("#back1").show();
});

$("#fever").click(function() {
    hideAlbums();
    $("#albumRow1").hide();
    $("#albumRow2").hide();
    $(".fever").show();
    $("#back1").show();
});

$("#back1").hide();

$("#back1").click(function() {
    hideAlbums();
    $("#albumRow1").show();
    $("#albumRow2").show();
    $("#back1").hide();
});