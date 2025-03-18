import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center">Industry Experience </span>
								</div>
								<h3>
									+4
									<span className="text-300"> years of </span>
									obsession
									<span className="text-300">
										<br />with Code 
										& System Architecture
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/menes.jpeg" alt="zelio" style={{ width: '50px', height: '50px', borderRadius:'15px' }} />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1 fs-6">Menes Konsult & Europlaw Group</h5>
														<span className="text-300 fs-7">2024 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/maza.jpeg" alt="zelio" style={{ width: '50px', height: '50px', borderRadius:'15px' }} />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1 fs-6">Maza Real Estate Solutions</h5>
														<span className="text-300 fs-7">2025</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/bngo.jpeg" alt="zelio" style={{ width: '50px', height: '50px', borderRadius:'15px' }} />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1 fs-6">BoardAndGo (YC 2025 Applicant)</h5>
														<span className="text-300 fs-7">2024 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/vire.jpeg" alt="zelio" style={{ width: '50px', height: '50px', borderRadius:'15px' }} />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1 fs-6">Vire Agency</h5>
														<span className="text-300 fs-7">2023 - Present</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Senior Software Engineer (Current Role & Leadership)</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Led development of scalable web applications, <span className="text-secondary-2">improving performance</span> and user experience for millions of users.</li>
											<li className="text-dark mb-3">Leading backend development & IT strategy.</li>
											<li className="text-dark mb-3">Integrated AWS services (S3) for scalable cloud solutions</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">TypeScript</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Nodejs</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Golang</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Kubernetes</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">AWS</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
