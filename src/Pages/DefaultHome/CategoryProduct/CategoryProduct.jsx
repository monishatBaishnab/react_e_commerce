import PropTypes from 'prop-types';
const CategoryProduct = ({categoryProduct}) => {
    const {title, price, category, image, rating} = categoryProduct;
    const {rate, count} = rating;
    console.log(categoryProduct);
    return (
        <div className='flex flex-col items-center p-4 border rounded-md bg-white space-y-3'>
            <div className='max-w-[200px] h-[300px] overflow-hidden flex items-center justify-center'>
                <img className='w-full h-full object-contain' src={image} alt={title} />
            </div>
            <div className='w-full space-y-3'>
                <span className='uppercase text-slate-400'>{category}</span>
                <h4 className='text-xl text-slate-950 font-medium block'>{title.length > 20 ? title.slice(0, 20)+' ....' : title.slice(0, 20)}</h4>
                <span>{rate} ({count})</span>
            </div>
            <div className='flex items-center justify-between w-full'>
                <span className='text-green-500 text-xl font-medium'>Price: {price} $</span>
                <button className='px-5 py-2 bg-green-50 text-green-500 rounded-md'>Add</button>
            </div>
        </div>
    );
};

CategoryProduct.propTypes = {
    categoryProduct: PropTypes.object,
}

export default CategoryProduct;