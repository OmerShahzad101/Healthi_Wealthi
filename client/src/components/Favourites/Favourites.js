import React from 'react'

const Favourites = () => {
  return (
  <>
  <div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Favourites</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Favourites</h2>
						</div>
					</div>
				</div>
			</div>
		
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#" className="booking-doc-img">
											<img src="assets/img/patients/patient.jpg" alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3>Richard Wilson</h3>
											<div className="patient-details">
												<h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
												<h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="dashboard-widget">
									<nav className="dashboard-menu">
										<ul>
											<li>
												<a href="patient-dashboard.html">
													<i className="fas fa-columns"></i>
													<span>Dashboard</span>
												</a>
											</li>
											<li className="active">
												<a href="favourites.html">
													<i className="fas fa-bookmark"></i>
													<span>Favourites</span>
												</a>
											</li>
											<li>
												<a href="chat.html">
													<i className="fas fa-comments"></i>
													<span>Message</span>
													<small className="unread-msg">23</small>
												</a>
											</li>
											<li>
												<a href="profile-settings.html">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											<li>
												<a href="change-password.html">
													<i className="fas fa-lock"></i>
													<span>Change Password</span>
												</a>
											</li>
											<li>
												<a href="index-2.html">
													<i className="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>

							</div>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="row row-grid">
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Ruby Perrin</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<span className="d-inline-block average-rating">(17)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Florida, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Darren Elder</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Newyork, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Deborah Angel</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(27)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-04.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Sofia Brient</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(4)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Louisiana, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-05.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Marvin Campbell</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(66)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Michigan, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $50 - $700 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Katharine Berthold</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(52)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Texas, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $500 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-07.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Linda Tobin</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(43)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Kansas, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $1000 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Paul Richard</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - Dermatology , Venereology & Lepros</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(49)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> California, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $100 - $400 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-09.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Dr. John Gibbs</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(112)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Oklahoma, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $500 - $2500 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-10.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Dr. Olga Barlow</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(65)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Montana, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $75 - $250 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-11.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Dr. Julia Washington</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MD - General Medicine, DM - Endocrinology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Oklahoma, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $275 - $450 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="profile-widget">
										<div className="doc-img">
											<a href="doctor-profile.html">
												<img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-12.jpg"/>
											</a>
											<a href="#" className="fav-btn">
												<i className="far fa-bookmark"></i>
											</a>
										</div>
										<div className="pro-content">
											<h3 className="title">
												<a href="doctor-profile.html">Dr. Shaun Aponte</a> 
												<i className="fas fa-check-circle verified"></i>
											</h3>
											<p className="speciality">MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Indiana, USA
												</li>
												<li>
													<i className="far fa-clock"></i> Available on Fri, 22 Mar
												</li>
												<li>
													<i className="far fa-money-bill-alt"></i> $150 - $350 
													<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
				</div>

			</div>	
  </>
  )
}

export default Favourites