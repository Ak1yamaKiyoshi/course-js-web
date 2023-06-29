import './App.css';
import Navigation from './Navigation';
import Post from './Post';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";
import Blog from './Blog'
import Home from './Home'

export let posts = [
  {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla est. Ut tristique et egestas quis ipsum suspendisse. Lacus vestibulum sed arcu non odio euismod lacinia at quis. In cursus turpis massa tincidunt. Vel facilisis volutpat est velit egestas dui id ornare. Ullamcorper malesuada proin libero nunc consequat interdum. Purus semper eget duis at tellus at urna condimentum. Volutpat odio facilisis mauris sit amet massa vitae. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Tincidunt vitae semper quis lectus nulla at volutpat. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra tellus in hac habitasse platea dictumst vestibulum. Nunc mi ipsum faucibus vitae. Enim nulla aliquet porttitor lacus luctus accumsan. Mauris ultrices eros in cursus. Facilisis sed odio morbi quis commodo odio aenean. Vivamus at augue eget arcu dictum.\nNibh nisl condimentum id venenatis a condimentum. Vehicula ipsum a arcu cursus vitae congue mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Morbi quis commodo odio aenean sed adipiscing diam. Mauris a diam maecenas sed enim. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Risus viverra adipiscing at in tellus integer feugiat. Velit euismod in pellentesque massa placerat duis. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nam at lectus urna duis convallis convallis. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Adipiscing bibendum est ultricies integer quis auctor elit. Facilisi nullam vehicula ipsum a arcu.\nLeo in vitae turpis massa sed elementum tempus egestas. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Interdum posuere lorem ipsum dolor sit. Et sollicitudin ac orci phasellus egestas. Morbi non arcu risus quis varius quam quisque. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Sed id semper risus in hendrerit gravida rutrum quisque non. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet aliquam id diam. Pulvinar neque laoreet suspendisse interdum consectetur. Vel elit scelerisque mauris pellentesque pulvinar. Praesent semper feugiat nibh sed pulvinar proin. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim.', author:'cool'},
  {text: '1', author:'2'},
  {text: '1', author:'2'},
  {text: '1', author:'2'}
]

function App() {
  return (
    <Routes> 
      <Route path='/blog' element={<Blog post={posts[0]}></Blog>} />
      <Route path='/nav' element={<Navigation></Navigation>} />
      <Route path='/home' element={<Home></Home>} />
    </Routes>
  );
}

export default App;

