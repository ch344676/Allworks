var React=require('react');
var ReactDom=require('react-dom');

var SearchBar = React.createClass({
  render: function() {
    return(
      <form>
      <input type="text" placeholder="Search" />
</form>
);
}
});
var MovieTable = React.createClass({
  render: function() 

  {
    return (
      <form>
       // <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          movies list
        </p>
      </form>
    );
  }
});

var FilterableMovieTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <MovieTable Details={this.props.products} />
      </div>
    );
  }
});


var PRODUCTS = [
  {category: 'Drama', year: '1995', stocked: true, name: 'Football'},
  {category: 'Drama', year: '1996', stocked: true, name: 'Baseball'},
  {category: 'comedy', year: '1999', stocked: false, name: 'Basketball'},
  {category: 'Adventure', year: '2010', stocked: true, name: 'iPod Touch'},
  {category: 'Action', year: '', stocked: false, name: 'iPhone 5'},
  {category: 'Action', year: '$199.99', stocked: true, name: 'Nexus 7'}
];
   
  
  ReactDom.render(
  <SearchBar/>,
  document.getElementById('app')
);
