const modulesFiles = import.meta.glob('./modules/*/zh.js')
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
    const value = modulesFiles[modulePath]
    Object.assign(modules, value.default)
    return modules
}, {})

export default {
    common: {
        scrollButton: "Scroll Down",
        relateTint: "Related content",
    },
    categories: {
        News: "News",
        Insights: "Insights",
        ResearchAndMarket: "Research & market analysis",
        AnnualReports: "annual-reports",
        Investing: "investing-sustainably",
        RealEstate: "real-estate-debt",
        LiftSciences: "life-sciences"
    },
    404: {
        404: '404',
    },
    ...modules,
}
