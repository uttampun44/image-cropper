import './App.css'
import ImageCrop from './components/ImageCrop'

function App() {
  
  return (
    <>
      <ImageCrop accept={["jpeg", "png", "accept/*"]} type='file' />
    </>
  )
}

export default App
