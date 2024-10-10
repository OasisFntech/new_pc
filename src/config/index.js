export const useHomeGird = () => {
	const { t } = useI18n()

	return computed(() => [
		{
			title: t('home.posts1[0].title'), // 使用 t 函数获取多语言文本
			subhead: t('home.posts1[0].description'),
			cover: 1,
		},
		{
			title: t('home.posts1[1].title'),
			subhead: t('home.posts1[1].description'),
			cover: 2,
		},
		undefined,
		undefined,
		undefined,
		{
			title: t('home.posts2[0].title'),
			subhead: t('home.posts2[0].description'),
			cover: 3,
		},
		{
			title: t('home.posts2[1].title'),
			subhead: t('home.posts2[1].description'),
			cover: 4,
		},
		{
			title: t('home.posts2[2].title'),
			subhead: t('home.posts2[2].description'),
			cover: 5,
		},
		{
			title: t('home.posts3[0].title'),
			subhead: t('home.posts3[0].description'),
			cover: 6,
		},
		{
			title: t('home.posts3[1].title'),
			subhead: t('home.posts3[1].description'),
			cover: 7,
		},
		{
			title: t('home.posts3[2].title'),
			subhead: t('home.posts3[2].description'),
			cover: 8,
		},
		undefined,
		undefined,
		{
			title: t('home.posts4[0].title'),
			subhead: t('home.posts4[0].description'),
			cover: 9,
		},
		{
			title: t('home.posts4[1].title'),
			subhead: t('home.posts4[1].description'),
			cover: 10,
		},
		{
			title: t('home.posts4[2].title'),
			subhead: t('home.posts4[2].description'),
			cover: 11,
		}
	])
}

export const useHomeIntroduce = () => {
	const { t } = useI18n()

	return {
		title: t('home.clientsTitle'),
		description: t('home.clientsDescription'),
		links: [
			{ label: t('home.explorePlatform'), url: '/pc/what-we-do/' },
			{ label: t('home.contactClientRelations'), url: 'void();' }
		],
		quote: t('home.quote'),
		author: t('home.author')
	}
}
