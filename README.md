Project: ArtPass Home Component
Overview

The Home component powers the landing page of ArtPass, an app designed to help users discover and book local dance, art, and music classes.

Key Technologies
	•	Next.js (App Router)
	•	React Client Components
	•	Tailwind CSS for utility-first styling
	•	next/image for optimized image loading
	•	lucide-react for SVG icons

Features
	•	Header & Navigation
	•	Custom icon badge and title area
	•	Cards include image, title, distance, category tags, ratings
	•	Five-tab menu (Home, Search, Add credits, Upcoming, Profile)
	
File: app/page.tsx

This file exports the Home component. It must include the 'use client' directive:
```
'use client';

import Image from "next/image";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  PlusCircle as PlusCircleIcon,
  Calendar as CalendarIcon,
  User as UserIcon,
  Star as StarIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative bg-white flex flex-col items-center gap-2.5">
      {/* ... JSX markup as shown above ... */}
    </div>
  );
}
```

Installation & Setup
	1.	Clone the repository:

git clone https://github.com/mirandatatiana/ArtPass.git
cd my-app


	2.	Install dependencies:

npm install
# or
yarn

3. **Ensure your `package.json` scripts** include:
```json
"scripts": {
  "dev": "next dev --turbo false",
  "build": "next build",
  "start": "next start"
}

	4.	Run the dev server:

npm run dev
# or



yarn dev

5. **Open** [http://localhost:3000](http://localhost:3000) in your browser.
````
## Tailwind Configuration

Make sure `tailwind.config.js` has:

```js
module.exports = {
content: [
 './app/**/*.{js,ts,jsx,tsx}',
 './components/**/*.{js,ts,jsx,tsx}'
],
theme: { extend: {} },
plugins: []
};
````
Customization
	•	Images: Place in /public and reference via <Image src="/filename.png" />.
	•	Icons: Swap out or add from lucide-react.
	•	Styling: Adjust Tailwind classes for spacing, color, shadows, and transitions.

Contributing
	1.	Fork the repo and clone your fork.
	2.	Create a branch: git checkout -b feature/my-feature.
	3.	Commit your changes: git commit -m "Add feature".
	4.	Push: git push origin feature/my-feature.
	5.	Open a Pull Request on GitHub.
