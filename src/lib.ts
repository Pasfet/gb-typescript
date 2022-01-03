interface IToastMsg {
	text: string;
	type: string;
}

interface IToastAction {
	name: string;
	handler: () => void;
}

export const renderBlock = (elementId: string, html: string): void => {
	const element = document.getElementById(elementId);
	element.innerHTML = html;
};

export const renderToast = (
	message: IToastMsg | null,
	action: IToastAction | null
): void => {
	let messageText = "";

	if (message != null) {
		messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || "Закрыть"}</button>
      </div>
    `;
	}

	renderBlock("toast-block", messageText);

	const button = document.getElementById("toast-main-action");
	if (button != null) {
		button.onclick = function () {
			if (action != null && action.handler != null) {
				action.handler();
			}
			renderToast(null, null);
		};
	}
};

export const getDate = (
	next: boolean = false,
	lastDayOfMonth: boolean = false
): string => {
	const today: Date = new Date();

	const year = today.getFullYear();

	let day: number | string = today.getDate();
	let month: number | string = today.getMonth() + 1;

	if (next) {
		day = today.getDate() + 1;
	} else if (lastDayOfMonth) {
		day = new Date(year, today.getMonth() + 1, 0).getDate();
	}

	if (day < 10) {
		day = `0${day}`;
	}

	if (month < 10) {
		month = `0${month}`;
	}

	return `${year}-${month}-${day}`;
};
