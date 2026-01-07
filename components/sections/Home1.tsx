import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="assets/imgs/home-page-2/hero-1/img1.jpg" alt="zelio" />
										<div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
											{/* <img src="assets/imgs/home-page-2/hero-1/img1.jpg" alt="zelio" /> */}
										</div>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m William</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h3 className="fs-20 my-3">Software<span className="text-linear-4">{'{'}Backend{'}'}</span>Engineer<span className="flicker"></span></h3>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">With over 5 years of experience </span>
											<span className="text-secondary-2">architecting</span> and,
											<span className="text-secondary-2">developing scalable</span>,
											<span className="text-secondary-2">high-performant</span>,
											<span className="text-secondary-2">backend systems</span><span className="text-dark">
												  for enterprise applications, mobility & transport, and financial services.</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* Carausel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
																	<rect width="512" height="512" fill="#3178C6"/>
																	<text x="50%" y="55%" font-family="Arial" font-size="200" fill="white" text-anchor="middle" dominant-baseline="middle">TS</text>
																	</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-2.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<svg role="img" viewBox="0 0 256 156" xmlns="http://www.w3.org/2000/svg">
																						<text x="10" y="90" font-family="Arial" font-size="80" fill="#FF9900">AWS</text>
																						</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-3.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<svg role="img" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
																				<circle cx="200" cy="200" r="180" stroke="#E535AB" stroke-width="20" fill="none"/>
																				<text x="50%" y="55%" font-family="Arial" font-size="100" fill="#E535AB" text-anchor="middle" dominant-baseline="middle">GQL</text>
																				</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-4.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<svg role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
																<circle cx="128" cy="128" r="128" fill="#00ADD8"/>
																<text x="50%" y="55%" font-family="Arial" font-size="100" fill="white" text-anchor="middle" dominant-baseline="middle">Go</text>
																</svg>
															</Link>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<Link href="assets/Parwar_William_Ofosu_Resume.pdf" className="btn me-2 text-300 ps-0 mt-4" target="_blank" download>
											<i className="ri-download-line text-primary-2" />
											[ Download my CV ]
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>

		</>
	)
}
