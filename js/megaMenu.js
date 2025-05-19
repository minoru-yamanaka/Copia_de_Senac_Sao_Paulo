const megaMenu = {

    init: function(megaMenuRootItems) {

      //megaMenu.mockFocus(megaMenuRootItems);
      megaMenu.setLeftDistances(megaMenuRootItems);

    },

    // mockFocus: function(megaMenuRootItems) {    // Mock hover on focus
      
    //   megaMenuRootItems.off('focusin.megaMenuMockFocus').on('focusin.megaMenuMockFocus', function(e) {
    //     megaMenuRootItems.removeClass('hover');
    //     $(e.delegateTarget).closest('li').addClass('hover');
    //   });
    //   megaMenuRootItems.off('focusout.megaMenuMockFocus').on('focusout.megaMenuMockFocus', function(e) {
    //       megaMenuRootItems.removeClass('hover');
    //   });

    // },

    setLeftDistances: function(megaMenuRootItems) { // Set left distance for --single mega menu boxes

      var timeOut;
      $(window).off('resize.setLeftDistances').on('resize.setLeftDistances', function() {
  
          clearTimeout(timeOut);
          timeOut = setTimeout(function() {
  
            megaMenuRootItems.each(function(){
              var item = $(this);
              item.find('.ssp-mega-menu__box--single').css('left', item.offset().left-$('.ssp-mega-menu__wrapper > ul').offset().left);
  
              if(item.find('.ssp-mega-menu__box').length == 0) {
                item.addClass('kill-hover-border');
              }
  
            });
  
          }, 200);
   
      });
  
      $(window).trigger('resize.setLeftDistances');
  
      megaMenuRootItems.off('mouseover.setLeftDistances').on('mouseover.setLeftDistances', function() {
        $(window).trigger('resize.setLeftDistances');
      })

    }

}