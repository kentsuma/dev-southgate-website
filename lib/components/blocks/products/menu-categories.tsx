// Types
import { MenuCategoriesProps, MenuData } from "@/lib/functions/types";

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  activeCategory,
  handleClick,
  menuData,
}) => {
  return (
    <div className="menu-parallelogram flex mt-[70px] items-center">
      <div className="flex h-full sm:skew-x-[20deg] text-goodpro gap-[20px] sm:gap-[90px] margin justify-center sm:items-left sm:justify-start text-white w-full sm:mt-0 mt-2">
        <h2
          className={`flex font-bold text-[15px] sm:text-3xl cursor-pointer justify-center items-center ${
            activeCategory === "ALL"
              ? "text-yellow-500 underline underline-offset-4"
              : ""
          }`}
          onClick={() => handleClick("ALL")}
        >
          ALL
        </h2>
        {Object.keys(menuData).map((category, index) => {
          return (
            <h2
              key={index}
              className={`flex font-bold text-[15px] cursor-pointer sm:text-3xl w-auto justify-center items-center ${
                activeCategory === category
                  ? "text-yellow-500  underline underline-offset-4"
                  : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category.toUpperCase()}
            </h2>
          );
        })}
      </div>
    </div>
  );
};
