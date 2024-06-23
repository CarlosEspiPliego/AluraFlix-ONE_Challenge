import { Route, Routes } from 'react-router-dom'
import { HomePage, AddNewVideoPage } from '@videoGallery'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/AluraFlix-ONE_Challenge/" element={<HomePage />} />
            <Route path="/AluraFlix-ONE_Challenge/addVideo" element={<AddNewVideoPage />} />
            <Route path="/*" element={<HomePage />} />
        </Routes>
    )
}
