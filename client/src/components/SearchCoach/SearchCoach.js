import React from 'react'

const SearchCoach = () => {
	return (
		<>
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-8 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Search</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">2245 matches found for : Dentist In Bangalore</h2>
						</div>
						<div className="col-md-4 col-12 d-md-block d-none">
							<div className="sort-by">
								<span className="sort-title">Sort by</span>
								<span className="sortby-fliter">
									<select className="select">
										<option>Select</option>
										<option className="sorting">Rating</option>
										<option className="sorting">Popular</option>
										<option className="sorting">Latest</option>
										<option className="sorting">Free</option>
									</select>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

							<div className="card search-filter">
								<div className="card-header">
									<h4 className="card-title mb-0">Search Filter</h4>
								</div>
								<div className="card-body">
									<div className="filter-widget">
										<div className="cal-icon">
											<input type="text" className="form-control datetimepicker" placeholder="Select Date" />
										</div>
									</div>
									<div className="filter-widget">
										<h4>Gender</h4>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" checked />
												<span className="checkmark"></span> Male Doctor
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" />
												<span className="checkmark"></span> Female Doctor
											</label>
										</div>
									</div>
									<div className="filter-widget">
										<h4>Select Specialist</h4>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="select_specialist" checked />
												<span className="checkmark"></span> Urology
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="select_specialist" checked />
												<span className="checkmark"></span> Neurology
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="select_specialist" />
												<span className="checkmark"></span> Dentist
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="select_specialist" />
												<span className="checkmark"></span> Orthopedic
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="select_specialist" />
												<span className="checkmark"></span> Cardiologist
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="select_specialist" />
												<span className="checkmark"></span> Cardiologist
											</label>
										</div>
									</div>
									<div className="btn-search">
										<button type="button" className="btn btn-block">Search</button>
									</div>
								</div>
							</div>

						</div>

						<div className="col-md-12 col-lg-8 col-xl-9">

							<div className="card">
								<div className="card-body">
									<div className="doctor-widget">
										<div className="doc-info-left">
											<div className="doctor-img">
												<a href="doctor-profile.html">
													<img src="assets/img/doctors/doctor-thumb-01.jpg" className="img-fluid" alt="User Image" />
												</a>
											</div>
											<div className="doc-info-cont">
												<h4 className="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
												<p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
												<h5 className="doc-department"><img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />Dentist</h5>
												<div className="rating">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star"></i>
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<div className="clinic-details">
													<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Florida, USA</p>
													<ul className="clinic-gallery">
														<li>
															<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
																<img src="assets/img/features/feature-01.jpg" alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
																<img src="assets/img/features/feature-02.jpg" alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
																<img src="assets/img/features/feature-03.jpg" alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
																<img src="assets/img/features/feature-04.jpg" alt="Feature" />
															</a>
														</li>
													</ul>
												</div>
												<div className="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div className="doc-info-right">
											<div className="clini-infos">
												<ul>
													<li><i className="far fa-thumbs-up"></i> 98%</li>
													<li><i className="far fa-comment"></i> 17 Feedback</li>
													<li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
													<li><i className="far fa-money-bill-alt"></i> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
												</ul>
											</div>
											<div className="clinic-booking">
												<a className="view-pro-btn" href="doctor-profile.html">View Profile</a>
												<a className="apt-btn" href="booking.html">Book Appointment</a>
											</div>
										</div>
									</div>
								</div>
							</div>



							<div className="load-more text-center">
								<a className="btn btn-primary btn-sm" href="#;">Load More</a>
							</div>
						</div>
					</div>

				</div>

			</div>

		</>
	)
}

export default SearchCoach