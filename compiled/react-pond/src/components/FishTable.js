"use strict";

var FishTable = function FishTable(props) {
  return React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      props.fishes.map(function (ele) {
        return React.createElement(FishTableRow, { one: ele });
      })
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0LXBvbmQvc3JjL2NvbXBvbmVudHMvRmlzaFRhYmxlLmpzIl0sIm5hbWVzIjpbIkZpc2hUYWJsZSIsInByb3BzIiwiZmlzaGVzIiwibWFwIiwiZWxlIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNHQSxZQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBa0I7QUFBQSxlQUFPLG9CQUFDLFlBQUQsSUFBYyxLQUFLQyxHQUFuQixHQUFQO0FBQUEsT0FBbEI7QUFESDtBQURGLEdBRGM7QUFBQSxDQUFoQjs7QUFTQTtBQUNBO0FBQ0FKLFVBQVVLLFNBQVYsR0FBc0I7QUFDcEJILFVBQVFJLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXRCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT1YsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiRmlzaFRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEZpc2hUYWJsZSA9IChwcm9wcykgPT4gKFxuICA8dGFibGU+XG4gICAgPHRib2R5PlxuICAgICAge3Byb3BzLmZpc2hlcy5tYXAoIGVsZSA9PiA8RmlzaFRhYmxlUm93IG9uZT17ZWxlfS8+KX1cblxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5GaXNoVGFibGUucHJvcFR5cGVzID0ge1xuICBmaXNoZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LkZpc2hUYWJsZSA9IEZpc2hUYWJsZTtcbiJdfQ==