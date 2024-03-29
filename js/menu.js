// Generated by CoffeeScript 1.4.0
(function() {
  var root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.MenuModel = (function(_super) {

    __extends(MenuModel, _super);

    MenuModel.prototype.initialize = function() {};

    function MenuModel() {}

    return MenuModel;

  })(Backbone.Model);

  root.MenuView = Backbone.View.extend({
    initialize: function() {
      return this.render();
    },
    render: function() {
      var $item_wd, $markup, $mitem,
        _this = this;
      $markup = $("<ul id=\"menu\">\n  <li class=\"item\"><a>想創意</a></li>\n  <li class=\"item\"><a>品文物</a></li>\n  <li class=\"item\"><a>談合作</a></li>\n  <li class=\"item\"><a>玩活動</a></li>\n  <li class=\"item\"><a>找我們</a></li>\n  <li class=\"item\"><a>相關鍵結</a></li>\n</ul>");
      $(document.body).append($markup);
      $mitem = $markup.find(".item");
      $item_wd = 44;
      return $.each($mitem, function(index, element) {
        $(element).css({
          backgroundImage: "url(images/mi_" + index + ".png)",
          right: $item_wd * index + "px",
          top: "-180px"
        });
        return $(element).delay(200 * index).animate({
          top: 0,
          duration: "slow",
          easing: "easeOutBounce"
        });
      });
    },
    setStatus: function() {}
  });

}).call(this);
