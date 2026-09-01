/**
 * Dados que não mudam com o idioma: identidade, contato e endereços.
 * Todo texto traduzível vive em `constants/translations`.
 */
export const profile = {
	name: "Gabriel de Jesus Silva",
	shortName: "Gabriel Silva",
	birthDate: "23/01/2000",
	city: "Senhor do Bonfim - BA",
	avatar: "/images/avatar/avatar.jpeg",
	email: "contato@gabrieljs.dev",
	phone: "(74) 99909-1508",
	phoneIntl: "+55 74 99909-1508",
	social: {
		linkedin: "https://www.linkedin.com/in/gabrieldjs21",
		github: "https://github.com/gabrieljsilva",
		instagram: "https://www.instagram.com/gabrieljsillva",
		website: "https://gabrieljs.dev",
		product: "https://untimeless.com",
	},
};

export const mailtoHref = `mailto:${profile.email}`;
export const telHref = "tel:+5574999091508";
