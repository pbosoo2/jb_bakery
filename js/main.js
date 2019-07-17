$(function(){
    $('.depth1 > li').hover(
        function(){
            // mouseover
            $('.depth1 > li')
                .find('.depth2')
                .addClass('show')
        },function(){
            // mouseout
            $('.depth1 > li')
                .find('.depth2')
                .removeClass('show')
        }
    );
    $('.sliders a').click(function(){
        // 기본 이벤트 취소
        return false;
    });

    var img_num = 0;  // 이미지 번호(배열)
    var img_width = 100;  // 이미지 크기(width)
    var duration = 5000;  // 재생시간

    var play_slider = setInterval(function(){

      if(img_num >= 3){ img_num = 0;}
      // image_width x img_num
      $('.sliders').css('margin-left', -(img_width * img_num) + '%');
      img_num++;
    }, duration)
});