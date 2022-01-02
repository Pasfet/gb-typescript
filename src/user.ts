import { renderBlock } from "./lib.js";

export function renderUserBlock(
	userName: string,
	avatar: string,
	favoritesItems: Array<string>
): void {
	const favoritesCaption = favoritesItems.length
		? favoritesItems.length
		: "ничего нет";

	const hasFavoriteItems = favoritesItems.length ? true : false;

	renderBlock(
		"user-block",
		`
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${
							hasFavoriteItems ? " active" : ""
						}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
	);
}
