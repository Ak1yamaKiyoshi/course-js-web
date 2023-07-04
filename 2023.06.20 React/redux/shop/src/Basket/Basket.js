import './Basket.css';
import { useSelector, useDispatch } from 'react-redux'
import { push, remove } from '../redux/basketSlice';
import jQuery from 'jquery';

export default function Basket() {
  const basket = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  function handleClick (e) {
    let parent = jQuery(e.target)
    console.log(parent.children())
    let title = parent.children()[0].textContent.trim();
    let price = parent.children()[1].textContent.trim();
    dispatch(remove({title:title, price:price}));
    // find index of  
    // Deletes wrong 
  }

  return (<>
    <div className='basket-container'>
      <div className='basket-grid'> 
    <h1> Basket </h1>
        {basket.map(el => (<div className='basket-element' onClick={handleClick}> 
          <h2> { el.payload.title } </h2>
          <p>  { el.payload.price } </p>
        </div> ))}
      </div>

    </div>
  </>
  );
}
