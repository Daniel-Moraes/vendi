export function HomeScreen() {
    return (
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
            <div data-hs-carousel='{"loadingClasses": "opacity-0","dotsItemClasses": "hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer"}' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 p-6">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">First slide</span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200 p-6">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">Second slide</span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-300 p-6">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">Third slide</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 pt-1 mt-14">
                <div className="border-b border-gray-200">
                    <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-2 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                            Detalhes
                        </button>
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-2 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                            Tenho interesse
                        </button>
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-2 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-underline-item-3" aria-selected="false" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                            Sobre o comprador
                        </button>
                    </nav>
                </div>

                <div className="mt-3">
                    <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                        <p className="text-gray-500">
                            Produto: Bicicletinha do vô
                        </p>
                        <p>Descrição: Procuro bicicleta do vô em velho estado</p>
                    </div>
                    <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                        <p className="text-gray-500">
                            Aqui você envia os trem tudo
                        </p>
                    </div>
                    <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
                        <div className="flex items-center gap-x-3">
                            <div className="shrink-0">
                                <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                            </div>

                            <div className="grow">
                                <h1 className="text-lg font-medium text-gray-800">
                                    Eliana Garcia
                                </h1>
                                <p className="text-sm text-gray-600">
                                    Graphic Designer, Web designer/developer
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm text-gray-600">
                                Sou uma designer gráfica experiente com mais de 14 anos de experiência em criar designs visualmente atraentes e centrados no usuário. Minha expertise abrange design de UI, sistemas de design e ilustrações personalizadas, ajudando clientes a trazer suas visões digitais à vida.
                            </p>

                            <p className="mt-3 text-sm text-gray-600">
                                Atualmente, trabalho remotamente para a Notion, onde desenho interfaces de templates, as converto em HTML e CSS, e forneço suporte abrangente aos nossos usuários. Sou apaixonada por criar designs elegantes e funcionais que melhoram as experiências dos usuários.
                            </p>

                            <ul className="mt-5 flex flex-col gap-y-3">
                                <li className="flex items-center gap-x-2.5">
                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2" href="#">
                                        elianagarcia997@about.me
                                    </a>
                                </li>

                                <li className="flex items-center gap-x-2.5">
                                    <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor" /></svg>
                                    <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2" href="#">
                                        @elianagarcia997
                                    </a>
                                </li>

                                <li className="flex items-center gap-x-2.5">
                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" /></svg>
                                    <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2" href="#">
                                        @elianagarcia997
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}