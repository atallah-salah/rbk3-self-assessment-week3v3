"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FishTableRow = function (_React$Component) {
  _inherits(FishTableRow, _React$Component);

  function FishTableRow(props) {
    _classCallCheck(this, FishTableRow);

    var _this = _possibleConstructorReturn(this, (FishTableRow.__proto__ || Object.getPrototypeOf(FishTableRow)).call(this));

    _this.state = {
      showDescription: false
    };
    return _this;
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 


  _createClass(FishTableRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "tr",
        { onClick: function onClick() {
            return _this2.setState({ showDescription: !_this2.state.showDescription });
          } },
        React.createElement(
          "td",
          { className: "fish-name" },
          "Nemo"
        ),
        React.createElement(
          "td",
          null,
          React.createElement("img", { src: props.one.image })
        ),
        this.state.showDescription ? React.createElement(
          "td",
          { className: "fish-description" },
          "Does anyone know where my dad is?"
        ) : null
      );
    }
  }]);

  return FishTableRow;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0LXBvbmQvc3JjL2NvbXBvbmVudHMvRmlzaFRhYmxlUm93LmpzIl0sIm5hbWVzIjpbIkZpc2hUYWJsZVJvdyIsInByb3BzIiwic3RhdGUiLCJzaG93RGVzY3JpcHRpb24iLCJzZXRTdGF0ZSIsIm9uZSIsImltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmaXNoIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUZpQjtBQUtsQjs7QUFFRDs7Ozs7NkJBQ1M7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFJLFNBQVM7QUFBQSxtQkFBTSxPQUFLQyxRQUFMLENBQWMsRUFBQ0QsaUJBQWlCLENBQUMsT0FBS0QsS0FBTCxDQUFXQyxlQUE5QixFQUFkLENBQU47QUFBQSxXQUFiO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxXQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsdUNBQUssS0FBS0YsTUFBTUksR0FBTixDQUFVQyxLQUFwQjtBQURGLFNBRkY7QUFLRyxhQUFLSixLQUFMLENBQVdDLGVBQVgsR0FBNkI7QUFBQTtBQUFBLFlBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEsU0FBN0IsR0FBdUc7QUFMMUcsT0FERjtBQVNEOzs7O0VBbkJ3QkksTUFBTUMsUzs7QUFzQmpDO0FBQ0E7OztBQUNBUixhQUFhUyxTQUFiLEdBQXlCO0FBQ3ZCQyxRQUFNSCxNQUFNSSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETixDQUF6Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9kLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6IkZpc2hUYWJsZVJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpc2hUYWJsZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0Rlc2NyaXB0aW9uOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvLyBDdXJyZW50bHksIHRoZSBpbWFnZSBiZWluZyBkaXNwbGF5ZWQgaXMgaGFyZGNvZGVkIGZyb20gdGlueXVybC5jb20gXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dEZXNjcmlwdGlvbjogIXRoaXMuc3RhdGUuc2hvd0Rlc2NyaXB0aW9ufSl9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlzaC1uYW1lXCI+TmVtbzwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMub25lLmltYWdlfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGVzY3JpcHRpb24gPyA8dGQgY2xhc3NOYW1lPVwiZmlzaC1kZXNjcmlwdGlvblwiPkRvZXMgYW55b25lIGtub3cgd2hlcmUgbXkgZGFkIGlzPzwvdGQ+IDogbnVsbH1cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9XG59XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbkZpc2hUYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGZpc2g6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5GaXNoVGFibGVSb3cgPSBGaXNoVGFibGVSb3c7XG4iXX0=