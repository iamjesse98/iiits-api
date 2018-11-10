import defaultRoutes from './defaultRoutes'
import oauthRoutes from './oauthRoutes'
import courseRoutes from './courseRoutes'
import facultyRoutes from './facultyRoutes'

export default new Map<string, Function>([
  ['/', defaultRoutes],
  ['/oauth', oauthRoutes],
  ['/student', studentRoutes],
  ['/course', courseRoutes],
  ['/faculty', facultyRoutes ]
])