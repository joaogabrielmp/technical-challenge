import './config/module-alias'
import { app } from '@/main/config/app'

const PORT = 3333

app.listen(3333, () => console.log(`Server running at http://localhost:${PORT}`))
