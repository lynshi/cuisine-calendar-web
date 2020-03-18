import { PageTabEnum } from '../../constants/PageTabEnum'
import Home from '../home/Home';
import Plan from '../plan/Plan';
import AddRecipe from '../addRecipe/AddRecipe';
import Recipes from '../recipes/Recipes';

function Page(props) {
    var selectedTab = props.selected;
    var pageToRender;

    if (selectedTab === PageTabEnum.HOME)
    {
        pageToRender = <Home />;
    }
    else if (selectedTab == PageTabEnum.PLAN)
    {
        pageToRender = <Plan />;
    }
    else if (selectedTab == PageTabEnum.RECIPES)
    {
        pageToRender = <Recipes />;
    }
    else if (selectedTab == PageTabEnum.ADD_RECIPE)
    {
        pageToRender = <AddRecipe />;
    }
    else
    {
        return "The tab selected is invalid!!";
    }
    return <div className={selectedTab}>{pageToRender}</div>;
}

export default Page;