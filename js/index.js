(function(){
    var Index = function(){
        this.marks = Marks;
        this.init();
    };
    Index.prototype = {
        init: function(){
            this.dealMarks();
            this.toggleType();
        },
        dealMarks: function(){
            var self = this;
            $('#marksBox').html(template('tpl-bookmarks', {data: self.marks}));
        },
        toggleType: function(){
            $('.z-folder-title').on('mouseover', function(){
                $('#marksBox').find('.z-link-box').removeClass('z-show');
                $(this).parent().children('.z-link-box').addClass('z-show');
            });
            $('.z-link-box').on('mouseleave', function(){
                $(this).removeClass('z-show');
            });
            $('#marksBox').on('mouseleave', function(){
                $(".z-link-box.z-show").removeClass('z-show');
            });
        }
    };
    new Index();
})();
