export const clickEvent = (event: any, to: any, push: any) => {
	const contentPusher: any = document.getElementById("content-pusher");
	contentPusher.classList.remove("visible");
	setTimeout(() => contentPusher.classList.add("visible"), 400);
	event.preventDefault();
	setTimeout(() => push(to), 400);
};
