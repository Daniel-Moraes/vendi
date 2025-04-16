export function HomeScreen() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div data-hs-carousel='{"loadingClasses": "opacity-0", "isInfiniteLoop": true, "dotsItemClasses": "hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer"}' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/anuncio.png')" }}>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/anuncio.png')" }}>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/anuncio.png')" }}>
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

            <div className="grid place-content-center grid-cols-7 justify-items-center mt-10 gap-4">
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Carros</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Casa</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Motos</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Diversos</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Eletro</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Esportes</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="inline-block size-[100px] rounded-full border-transparent border-2 hover:border-solid hover:border-primary cursor-pointer" src="https://cdn.sistemawbuy.com.br/arquivos/7d8148512b143ce4d5e4da77d5370efc/produtos/644bfa5881ce2/255f7ccabd9d2eccb92ae2eb44cebbf1_1671679760-64b4c06f73910.jpeg" alt="Avatar" />
                    <span className="mt-2 text-gray-800">Mais</span>
                </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-800 mt-14">Principais anúncios</h1>

            <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer",
  "slidesQty": {
    "xs": 1,
    "sm": 2,
    "md": 3,
    "lg": 4,
    "xl": 5
  }
}' className="relative">
                <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                    <div className="relative min-h-[370px] -mx-1">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Máquina de Lavar</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.500,00</p>
                                        <p className="text-gray-600 mt-1">Localização: São Paulo, SP</p>
                                        <p className="text-gray-600 mt-1">05/01/2023 00:00</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
                                    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-semibold text-gray-800">Título do Anúncio 1</h3>
                                        <p className="text-gray-600 mt-2">R$ 2.000,00</p>
                                        <p className="text-gray-600 mt-1">Localização: Rio de Janeiro, RJ</p>
                                        <p className="text-gray-600 mt-1">Postado em: 02/01/2023</p>
                                    </div>
                                </a>
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

            <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 pt-1 mt-6">
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
                        <div className="flex flex-col items-start gap-4 p-4">
                            <h2 className="text-xl font-semibold text-gray-800">Bicicleta antiga em bom estado</h2>
                            <p className="text-gray-600">Estou procurando comprar uma bike específica e estou disposto a pagar um preço justo. Se você tiver este produto disponível, por favor, entre em contato comigo.</p>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-800 font-medium">Marca:</span>
                                <span className="text-gray-600">OGGI</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-800 font-medium">Modelo:</span>
                                <span className="text-gray-600">Elite Carbon</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-800 font-medium">Preço oferecido:</span>
                                <span className="text-gray-600 text-2xl font-bold">R$ 10.500,00</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <span className="text-gray-800 font-medium">Valor negociável</span>
                            </div>
                        </div>
                    </div>
                    <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-800 font-medium" htmlFor="image-upload">Envie uma imagem:</label>
                                <input type="file" id="image-upload" className="border border-gray-300 rounded p-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-800 font-medium" htmlFor="offered-price">Valor oferecido:</label>
                                <input type="number" id="offered-price" className="border border-gray-300 rounded p-2" placeholder="R$" />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="negotiate-price" className="border border-gray-300 rounded" />
                                <label className="text-gray-800 font-medium" htmlFor="negotiate-price">Disposto a negociar o preço</label>
                            </div>
                        </div>
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

            <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 pt-1 mt-6">
                <div className="border-b border-gray-200">
                    <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-2 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none active" id="tabs-maquina-item-1" aria-selected="true" data-hs-tab="#tabs-maquina-1" aria-controls="tabs-maquina-1" role="tab">
                            Detalhes
                        </button>
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-2 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="tabs-maquina-item-2" aria-selected="false" data-hs-tab="#tabs-maquina-2" aria-controls="tabs-maquina-2" role="tab">
                            Tenho interesse
                        </button>
                        <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-2 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="tabs-maquina-item-3" aria-selected="false" data-hs-tab="#tabs-maquina-3" aria-controls="tabs-maquina-3" role="tab">
                            Sobre o comprador
                        </button>
                    </nav>
                </div>

                <div className="mt-3">
                    <div id="tabs-maquina-1" role="tabpanel" aria-labelledby="tabs-maquina-item-1">
                        <div className="flex flex-col items-start gap-4 p-4">
                            <h2 className="text-xl font-semibold text-gray-800">Máquina de lavar em bom estado</h2>
                            <p className="text-gray-600">Estou procurando comprar uma máquina de lavar específica e estou disposto a pagar um preço justo. Se você tiver este produto disponível, por favor, entre em contato comigo.</p>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-800 font-medium">Marca:</span>
                                <span className="text-gray-600">LG</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-800 font-medium">Modelo:</span>
                                <span className="text-gray-600">TWINWash</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-800 font-medium">Preço oferecido:</span>
                                <span className="text-gray-600 text-2xl font-bold">R$ 2.500,00</span>
                            </div>
                        </div>
                    </div>
                    <div id="tabs-maquina-2" className="hidden" role="tabpanel" aria-labelledby="tabs-maquina-item-2">
                        <div className="flex flex-col items-center gap-4 p-4">
                            <p className="text-gray-800 font-medium">Você precisa estar logado para enviar dados.</p>
                            <button
                                className="bg-primary text-white py-2 px-4 rounded"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <div id="tabs-maquina-3" className="hidden" role="tabpanel" aria-labelledby="tabs-maquina-item-3">
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

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2">
                        <div className="max-w-xs">
                            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Perguntas<br />mais frequentes</h2>
                            <p className="mt-1 hidden md:block text-gray-600">Respostas para as perguntas mais frequentes.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="hs-accordion-group divide-y divide-gray-200">
                            <div className="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                    Como faço para anunciar?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                    <p className="text-gray-600">
                                        Basta criar uma conta e clicar no botão "Anunciar" no menu principal. Preencha os campos obrigatórios e clique em "Salvar".
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                    É gratuito criar uma conta?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <p className="text-gray-600">
                                        Sim, criar uma conta é gratuito. Você só paga uma taxa quando comprar o produto de alguém interessado.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                    Como faço para comprar um produto?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                    <p className="text-gray-600">
                                        Basta criar uma conta e encontrar alguém que deseja comprar o produto que você tem. Entre em contato com o comprador e negocie o preço.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                                    Como entro em contato com o comprador?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                    <p className="text-gray-600">
                                        Basta encontrar o anúncio de compra ideal e abri-lo, lá você encontrará um botão para entrar em contato com o comprador, ou você pode enviar uma mensagem diretamente na página de compra.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                                    Perdi o link de um item que comprei, e agora?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                    <p className="text-gray-600">
                                        Se você perdeu o link do item que comprou, basta acessar a sua conta e ir até a aba "Compras". Lá você encontrará todos os itens que comprou e poderá acessar o link novamente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}