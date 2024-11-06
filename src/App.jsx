import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Consulting from './pages/Consulting';
import Projects from './pages/Projects';
import Team from './pages/Team';
import ErrorPage from './pages/ErrorPage';
import Resources from './pages/Resources';
import BlogPage from './pages/BlogPage';
import Events from './pages/Events';
import Alumni from './pages/Alumni';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<Home />} />
				<Route path='/product-management' element={<Product />} />
				<Route path='/consulting' element={<Consulting />} />
				<Route path='/blog/:blogid' element={<BlogPage />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='/events' element={<Events />} />
				<Route path='/alumni' element={<Alumni />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/leadership' element={<Team />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}
