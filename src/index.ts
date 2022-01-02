import { renderSearchFormBlock } from "./search-form.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { getDate } from "./lib.js";

window.addEventListener("DOMContentLoaded", () => {
	renderUserBlock("Pasfet", "/img/avatar.png", []);
	renderSearchFormBlock(getDate(), getDate(true));
	renderToast(
		{
			text: "Это пример уведомления. Используйте его при необходимости",
			type: "success",
		},
		{
			name: "Понял",
			handler: () => {
				console.log("Уведомление закрыто");
			},
		}
	);
});
