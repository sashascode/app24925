import Category from "../Category/Category";

function CategoryList({categories}) {
  return(categories?.map((category) => <Category key={category.id} category={category} />));
}

export default CategoryList