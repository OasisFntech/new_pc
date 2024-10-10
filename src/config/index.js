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
		title: t('home.intro.title'),
		description: t('home.intro.description'),
		links: [
			{ label: t('home.intro.list[0].label'), url: '/pc/what-we-do/' },
			{ label: t('home.intro.list[1].label'), url: 'void();' }
		],
		quote: t('home.intro.quote'),
		author: t('home.intro.author')
	}
}

export const useWhoIntroduce = () => {
	const { t } = useI18n()

	return {
		title: t('who.intro.title'),
		description: t('who.intro.description'),
		links: [
			{ label: t('who.intro.list[0].label'), url: '/pc/what-we-do/' },
			{ label: t('who.intro.list[1].label'), url: 'void();' },
			{ label: t('who.intro.list[2].label'), url: 'void();' },
			{ label: t('who.intro.list[3].label'), url: 'void();' },
			{ label: t('who.intro.list[4].label'), url: 'void();' },
		],
		quote: t('who.intro.quote'),
		author: t('who.intro.author')
	}
}

export const useWhatIntroduce = () => {
	const { t } = useI18n()

	return {
		title: t('what.intro.title'),
		description: t('what.intro.description'),
		links: [
			{ label: t('what.intro.list[0].label'), url: '/pc/what-we-do/' },
			{ label: t('what.intro.list[1].label'), url: 'void();' },
			{ label: t('what.intro.list[2].label'), url: 'void();' },
			{ label: t('what.intro.list[3].label'), url: 'void();' }
		],
		quote: t('what.intro.quote'),
		author: t('what.intro.author')
	}
}

export const useSustainIntroduce = () => {
	const { t } = useI18n()

	return {
		title: t('sustain.intro.title'),
		description: t('sustain.intro.description'),
		links: [
			{ label: t('sustain.intro.list[0].label'), url: '/pc/what-we-do/' },
			{ label: t('sustain.intro.list[1].label'), url: 'void();' },
			{ label: t('sustain.intro.list[2].label'), url: 'void();' },
			{ label: t('sustain.intro.list[3].label'), url: 'void();' }
		],
		quote: t('sustain.intro.quote'),
		author: t('sustain.intro.author')
	}
}

export const usePeopleIntroduce = () => {
	const { t } = useI18n()

	return {
		title: t('people.intro.title'),
		description: t('people.intro.description'),
		links: [
			{ label: t('people.intro.list[0].label'), url: '/pc/what-we-do/' },
			{ label: t('people.intro.list[1].label'), url: 'void();' },
			{ label: t('people.intro.list[2].label'), url: 'void();' },
			{ label: t('people.intro.list[3].label'), url: 'void();' }
		],
		quote: t('people.intro.quote'),
		author: t('people.intro.author')
	}
}