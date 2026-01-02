export interface Service {
  id: string;
  title: string;
  image: string;
  category: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: "cleaning",
    name: "Domestic & Professional Cleaning Services",
    services: [
      {
        id: "c1",
        title: "Domestic/Professional Cleaning",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347425/15d30a6f03974c61b219b94abd392eee7b404979_l5kekk.jpg",
        category: "Domestic & Professional Cleaning Services",
        slug: "domestic-professional-cleaning",
      },
      {
        id: "c2",
        title: "Gardening",
        image:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1932&auto=format&fit=crop",
        category: "Domestic & Professional Cleaning Services",
        slug: "gardening",
      },
      {
        id: "c3",
        title: "Post-Construction Cleaning",
        image:
          "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop",
        category: "Domestic & Professional Cleaning Services",
        slug: "post-construction-cleaning",
      },
      {
        id: "c4",
        title: "Laundry & Ironing",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347473/ef7824c348a085657f2510c06a8e58d46581ae1a_jugn0z.jpg",
        category: "Domestic & Professional Cleaning Services",
        slug: "laundry-ironing",
      },
      {
        id: "c5",
        title: "Window Cleaning",
        image:
          "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
        category: "Domestic & Professional Cleaning Services",
        slug: "window-cleaning",
      },
    ],
  },
  {
    id: "repairs",
    name: "Construction, Repairs & Property Services",
    services: [
      {
        id: "r1",
        title: "Painting & Decorating",
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
        category: "Construction, Repairs & Property Services",
        slug: "painting-decorating",
      },
      {
        id: "r2",
        title: "Plumbing",
        image:
          "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop",
        category: "Construction, Repairs & Property Services",
        slug: "plumbing",
      },
      {
        id: "r3",
        title: "Electrical Services",
        image:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop",
        category: "Construction, Repairs & Property Services",
        slug: "electrical-services",
      },
      {
        id: "r4",
        title: "Carpentry",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop",
        category: "Construction, Repairs & Property Services",
        slug: "carpentry",
      },
      {
        id: "r5",
        title: "Roofing",
        image:
          "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
        category: "Construction, Repairs & Property Services",
        slug: "roofing",
      },
    ],
  },
  {
    id: "business",
    name: "Business & Professional Services",
    services: [
      {
        id: "b1",
        title: "Accounting - Bookkeeping, Tax Services",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
        category: "Business & Professional Services",
        slug: "accounting-bookkeeping",
      },
      {
        id: "b2",
        title: "Web Design & Development",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        category: "Business & Professional Services",
        slug: "web-design-development",
      },
      {
        id: "b3",
        title: "Social Media Marketing",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        category: "Business & Professional Services",
        slug: "social-media-marketing",
      },
      {
        id: "b4",
        title: "IT & Technology Support",
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
        category: "Business & Professional Services",
        slug: "it-technology-support",
      },
    ],
  },
  {
    id: "health",
    name: "Health & Beauty",
    services: [
      {
        id: "h1",
        title: "Personal Trainer",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        category: "Health & Beauty",
        slug: "personal-trainer",
      },
      {
        id: "h2",
        title: "Hair Stylist",
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
        category: "Health & Beauty",
        slug: "hair-stylist",
      },
      {
        id: "h3",
        title: "Massage Therapy",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347512/02b547ba507a0cb22dc3b2855520194b7bb1cee2_jhy6dq.jpg",
        category: "Health & Beauty",
        slug: "massage-therapy",
      },
      {
        id: "h4",
        title: "Makeup Artist",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
        category: "Health & Beauty",
        slug: "makeup-artist",
      },
    ],
  },
  {
    id: "education",
    name: "Education & Skills",
    services: [
      {
        id: "e1",
        title: "Tutor",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        category: "Education & Skills",
        slug: "tutor",
      },
      {
        id: "e2",
        title: "Exam Preparation",
        image:
          "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
        category: "Education & Skills",
        slug: "exam-preparation",
      },
      {
        id: "e3",
        title: "IT Training",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347561/baedc105d8b7289b6df3553aaf3008f6071abeff_i5pwtz.jpg",
        category: "Education & Skills",
        slug: "it-training",
      },
      {
        id: "e4",
        title: "Driving Instructor",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347562/055f99de115c870f909854c47f06bbd1cad1ac3c_i7edjl.jpg",
        category: "Education & Skills",
        slug: "driving-instructor",
      },
    ],
  },
  {
    id: "events",
    name: "Events & Entertainment",
    services: [
      {
        id: "ev1",
        title: "Event Planning & Coordination",
        image:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        category: "Events & Entertainment",
        slug: "event-planning-coordination",
      },
      {
        id: "ev2",
        title: "Venue Hire",
        image:
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
        category: "Events & Entertainment",
        slug: "venue-hire",
      },
      {
        id: "ev3",
        title: "Event Staff Services",
        image:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
        category: "Events & Entertainment",
        slug: "event-staff-services",
      },
      {
        id: "ev4",
        title: "DJs",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347563/f719f3016514d98b1c16d230d15623b94adbd573_lpmyza.jpg",
        category: "Events & Entertainment",
        slug: "djs",
      },
    ],
  },
  {
    id: "weddings",
    name: "Weddings",
    services: [
      {
        id: "w1",
        title: "Wedding Photography & Videography",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        category: "Weddings",
        slug: "wedding-photography-videography",
      },
      {
        id: "w2",
        title: "Wedding Planning",
        image:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        category: "Weddings",
        slug: "wedding-planning",
      },
      {
        id: "w3",
        title: "Bridal Makeup & Hair",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop",
        category: "Weddings",
        slug: "bridal-makeup-hair",
      },
      {
        id: "w4",
        title: "Wedding Decor & Styling",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347563/1025823fa02d17f81d28a73070b4362cb80680e7_ljtvlt.jpg",
        category: "Weddings",
        slug: "wedding-decor-styling",
      },
    ],
  },
  {
    id: "transport",
    name: "Transport & Logistics",
    services: [
      {
        id: "t1",
        title: "Movers & Removals",
        image:
          "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop",
        category: "Transport & Logistics",
        slug: "movers-removals",
      },
      {
        id: "t2",
        title: "Car Hire",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
        category: "Transport & Logistics",
        slug: "car-hire",
      },
      {
        id: "t3",
        title: "Delivery Services",
        image:
          "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2072&auto=format&fit=crop",
        category: "Transport & Logistics",
        slug: "delivery-services",
      },
      {
        id: "t4",
        title: "Chauffeur Services",
        image:
          "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767347564/e78ed7fb1fd9d7f9374417bd265621385b64a7f7_arrxwr.jpg",
        category: "Transport & Logistics",
        slug: "chauffeur-services",
      },
    ],
  },
];
