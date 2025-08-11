# 多言語対応実装計画（3言語・トースト切り替え版）

## 📋 要件整理
- **対応言語**: 英語（デフォルト）、日本語、インドネシア語
- **切り替えUI**: 右下のトースト（固定位置）
- **現在の組織**: PAI: People and Ideas
- **コンテンツ**: コミュニティプラットフォーム系

## 🏗️ ディレクトリ構造（新規追加ファイル）
```
src/
├── data/
│   └── translations.json          # 3言語の翻訳データ
├── hooks/
│   └── useLanguage.ts             # 言語管理カスタムフック
├── components/
│   └── LanguageToast.tsx          # 右下トースト言語切り替え
├── contexts/                      # 既存
│   ├── ThemeContext.tsx          
│   └── LanguageContext.tsx        # 言語コンテキスト（オプション）
```

## 🗂️ 翻訳データ構造設計

### translations.json 構造
```json
{
  "en": {
    "meta": {
      "title": "PAI: People and Ideas",
      "description": "A community platform connecting diverse people and ideas to shape a brighter future between Japan and Indonesia."
    },
    "navigation": {
      "about": "About PAI",
      "curriculum": "What You Learn", 
      "cooperators": "Cooperators",
      "partners": "Partners",
      "news": "News",
      "contact": "Contact"
    },
    "hero": {
      "tagline": "People and Ideas connecting for a brighter future v2.0.1",
      "title": "PAI:",
      "subtitle": "People and Ideas",
      "slogan": "Where people and ideas shape a brighter future.",
      "description1": "A community platform connecting diverse wisdom and cultures.",
      "description2": "Providing a space for people and ideas from Japan and Indonesia to meet and co-create.",
      "buttons": {
        "moreInfo": "MORE_INFO()",
        "connect": "CONNECT_WITH_US()"
      }
    },
    "about": {
      "title": "What is PAI: People and Ideas",
      "description": "A community platform connecting diverse wisdom and cultures. Providing a space for people and ideas from Japan and Indonesia to meet, co-create, and shape a brighter future.",
      "mission": "Where diverse cultures and wisdom meet, sharing ideas, learning together, and creating together as a community.",
      "features": {
        "culturalBridge": {
          "title": "Cultural Bridge",
          "description": "Respecting diverse cultures and values of Japan and Indonesia, providing an environment where people from different backgrounds can deepen mutual understanding and co-create."
        },
        "ideasExchange": {
          "title": "Ideas Exchange", 
          "description": "A platform for freely sharing innovative ideas and creative thinking, maximizing individual potential and the power of collective intelligence."
        },
        "collaborativeLearning": {
          "title": "Collaborative Learning",
          "description": "A learning community where we learn and grow together, with participants teaching and supporting each other to improve their skills."
        },
        "futureCreation": {
          "title": "Future Creation",
          "description": "Building a sustainable community that brings together the power of people and ideas to co-create a better future for both countries and the world."
        }
      },
      "stats": {
        "countries": "Countries",
        "partners": "Partners", 
        "members": "Members",
        "ideas": "Ideas"
      },
      "cta": {
        "ready": "READY TO JOIN OUR COMMUNITY?",
        "question": "Want to create a better future together?",
        "explore": "EXPLORE_MORE()",
        "connect": "CONNECT_NOW()"
      },
      "footer": "WHERE PEOPLE AND IDEAS SHAPE THE FUTURE"
    },
    "curriculum": {
      "title": "What You Learn",
      "description": "Practical skill sets for next-generation digital talent. Learn systematically the technologies demanded in the industry.",
      "courses": {
        "webDevelopment": {
          "title": "Web & E-commerce Development",
          "description": "Learn modern website and e-commerce construction techniques. Covers from frontend to backend comprehensively."
        },
        "systemDevelopment": {
          "title": "System Development", 
          "description": "Enterprise-level system construction techniques. Master scalable architecture design."
        },
        "mobileApp": {
          "title": "Mobile App Development",
          "description": "Cross-platform development for iOS & Android. Also learn native app development methods."
        },
        "serverInfra": {
          "title": "Server Infrastructure",
          "description": "Cloud infrastructure and DevOps practice. Master modern server operations and deployment methods."
        },
        "aiMachineLearning": {
          "title": "AI & Machine Learning",
          "description": "Implementation of artificial intelligence and data science. Application development using the latest AI technology."
        },
        "blockchain": {
          "title": "Blockchain Development",
          "description": "Web3, DApp, and smart contract development. Decentralized application construction technology."
        }
      },
      "levels": {
        "beginner": "Beginner",
        "intermediate": "Intermediate", 
        "advanced": "Advanced"
      },
      "footer": "LEARN BY DOING, GROW BY CREATING"
    },
    "cooperators": {
      "title": "Cooperators",
      "description": "Building a comprehensive human resource development ecosystem through industry-academia-government collaboration.",
      "organizations": {
        "starup": {
          "title": "STARUP",
          "role": "Technology Innovation Partner",
          "description": "Responsible for research and development of cutting-edge technology and practical curriculum design. Provides practical programs reflecting industry trends and supports learners to become immediate assets in the field."
        },
        "sakuranesia": {
          "title": "Sakuranesia Foundation",
          "role": "Educational Support Partner", 
          "description": "Creating quality educational opportunities through provision of educational funding and learning environment development. Builds a foundation for many learners to participate in programs through scholarship systems and facility provision."
        },
        "government": {
          "title": "Government Agencies",
          "role": "Policy Support Partner",
          "description": "Promoting policy formulation and institutional development related to digital human resource development. Supports sustainable human resource development ecosystem through promoting international talent exchange and building qualification certification systems."
        }
      },
      "footer": "STRONGER TOGETHER, BRIGHTER FUTURE"
    },
    "partners": {
      "title": "Partners", 
      "description": "Partnering with major universities in Indonesia to develop practical engineer training programs.",
      "universities": {
        "stikomBali": "STIKOM Bali",
        "uinJakarta": "UIN Jakarta",
        "upi": "UPI",
        "unlaBandung": "UNLA Bandung",
        "uiFmipa": "UI FMIPA",
        "its": "ITS",
        "unej": "UNEJ"
      },
      "footer": "CONNECTING KNOWLEDGE ACROSS BORDERS"
    },
    "news": {
      "title": "News",
      "description": "Delivering the latest program information, partnerships, and event information.",
      "categories": {
        "program": "Program",
        "partnership": "Partnership",
        "event": "Event"
      },
      "status": {
        "new": "NEW",
        "important": "IMPORTANT", 
        "completed": "COMPLETED"
      },
      "readMore": "Read More",
      "viewAll": "View More",
      "footer": "STAY UPDATED WITH PAI"
    },
    "contact": {
      "title": "Contact",
      "description": "Feel free to contact us with any questions or inquiries about the program. Our professional staff will be happy to answer.",
      "form": {
        "title": "Contact Form",
        "name": "Name",
        "email": "Email Address", 
        "organization": "Organization (Optional)",
        "inquiryType": "Inquiry Type",
        "message": "Detailed Message",
        "submit": "SEND_MESSAGE()",
        "sending": "SENDING...",
        "namePlaceholder": "John Doe",
        "emailPlaceholder": "example@email.com",
        "organizationPlaceholder": "Company ABC / University XYZ etc.",
        "messagePlaceholder": "Please describe your inquiry in detail...",
        "inquiryTypes": {
          "select": "--- Please Select ---",
          "program": "About Program Content",
          "partnership": "About Partnership",
          "university": "About University Collaboration", 
          "career": "About Career Support",
          "other": "Other"
        }
      },
      "footer": "WE'RE HERE TO HELP YOU SUCCEED"
    },
    "footer": {
      "description": "A community platform connecting diverse wisdom and cultures of people from Japan and Indonesia. Providing a place for people and ideas to meet, co-create, and contribute to sustainable development of both countries.",
      "contact": "CONTACT",
      "navigation": "NAVIGATION", 
      "copyright": "© 2025 PAI: People and Ideas. All rights reserved.",
      "madeWith": "Made with ❤️ in Japan & Indonesia"
    }
  },
  "ja": {
    "meta": {
      "title": "PAI: People and Ideas",
      "description": "多様な人の知恵や文化を結びつけ、日本とインドネシアの間でより明るい未来を形作るコミュニティプラットフォーム。"
    },
    "navigation": {
      "about": "PAIとは",
      "curriculum": "学べること",
      "cooperators": "協力団体", 
      "partners": "パートナー",
      "news": "お知らせ",
      "contact": "お問い合わせ"
    },
    "hero": {
      "tagline": "People and Ideas connecting for a brighter future v2.0.1",
      "title": "PAI:",
      "subtitle": "People and Ideas",
      "slogan": "Where people and ideas shape a brighter future.",
      "description1": "多様な人の知恵や文化を結びつけるコミュニティプラットフォーム。",
      "description2": "日本とインドネシアの人々とアイデアが出会い、共創する場を提供します。",
      "buttons": {
        "moreInfo": "MORE_INFO()",
        "connect": "CONNECT_WITH_US()"
      }
    },
    "about": {
      "title": "PAI: People and Ideasとは",
      "description": "多様な人の知恵や文化を結びつけるコミュニティプラットフォーム。日本とインドネシアの人々とアイデアが出会い、共創し、より明るい未来を形作る場を提供します。",
      "mission": "多様な文化と知恵を持つ人々が出会い、アイデアを共有し、共に学び、共に創るコミュニティを築く。",
      "features": {
        "culturalBridge": {
          "title": "文化の架け橋",
          "description": "日本とインドネシアの多様な文化と価値観を尊重し、異なる背景を持つ人々が相互理解を深めながら共創できる環境を提供します。"
        },
        "ideasExchange": {
          "title": "アイデア交流", 
          "description": "革新的なアイデアと創造的な発想を自由に共有できるプラットフォームで、個人の可能性と集合知の力を最大限に活用します。"
        },
        "collaborativeLearning": {
          "title": "協働学習",
          "description": "共に学び、共に成長する学習コミュニティで、参加者同士が互いに教え合い、支え合いながらスキルを向上させます。"
        },
        "futureCreation": {
          "title": "未来創造",
          "description": "人とアイデアの力を結集し、両国そして世界のより良い未来を共に創造する持続可能なコミュニティを構築します。"
        }
      },
      "stats": {
        "countries": "国",
        "partners": "パートナー", 
        "members": "メンバー",
        "ideas": "アイデア"
      },
      "cta": {
        "ready": "READY TO JOIN OUR COMMUNITY?",
        "question": "一緒により良い未来を創りませんか？",
        "explore": "EXPLORE_MORE()",
        "connect": "CONNECT_NOW()"
      },
      "footer": "WHERE PEOPLE AND IDEAS SHAPE THE FUTURE"
    },
    "curriculum": {
      "title": "学べること",
      "description": "実践的なスキルセットで次世代のデジタル人材に。現場で求められる技術を体系的に学習できます。",
      "courses": {
        "webDevelopment": {
          "title": "Web制作・ECサイト制作",
          "description": "モダンなウェブサイトとECサイトの構築技術を学習。フロントエンドからバックエンドまで幅広くカバーします。"
        },
        "systemDevelopment": {
          "title": "システム開発", 
          "description": "エンタープライズレベルのシステム構築技術。スケーラブルなアーキテクチャ設計を習得できます。"
        },
        "mobileApp": {
          "title": "モバイルアプリ開発",
          "description": "iOS・Android対応のクロスプラットフォーム開発。ネイティブアプリの開発手法も学習します。"
        },
        "serverInfra": {
          "title": "サーバー構築",
          "description": "クラウドインフラとDevOps実践。現代的なサーバー運用とデプロイメント手法を習得。"
        },
        "aiMachineLearning": {
          "title": "AI・機械学習",
          "description": "人工知能とデータサイエンスの実装。最新のAI技術を活用したアプリケーション開発。"
        },
        "blockchain": {
          "title": "ブロックチェーン開発",
          "description": "Web3・DApp・スマートコントラクト開発。分散型アプリケーションの構築技術。"
        }
      },
      "levels": {
        "beginner": "初級",
        "intermediate": "中級", 
        "advanced": "上級"
      },
      "footer": "LEARN BY DOING, GROW BY CREATING"
    },
    "cooperators": {
      "title": "協力団体",
      "description": "産学官連携により、包括的な人材育成エコシステムを構築しています。",
      "organizations": {
        "starup": {
          "title": "STARUP",
          "role": "技術革新パートナー",
          "description": "最新技術の研究開発と実践的なカリキュラム設計を担当。業界のトレンドを反映した実用的なプログラムを提供し、学習者が現場で即戦力となれるよう支援します。"
        },
        "sakuranesia": {
          "title": "サクラネシア財団",
          "role": "教育支援パートナー", 
          "description": "教育資金の提供と学習環境の整備を通じて、質の高い教育機会を創出。奨学金制度や施設提供により、多くの学習者がプログラムに参加できる基盤を構築します。"
        },
        "government": {
          "title": "行政機関",
          "role": "政策支援パートナー",
          "description": "デジタル人材育成に関する政策立案と制度整備を推進。国際的な人材交流促進や資格認定制度の構築により、持続可能な人材育成エコシステムを支援します。"
        }
      },
      "footer": "STRONGER TOGETHER, BRIGHTER FUTURE"
    },
    "partners": {
      "title": "パートナー", 
      "description": "インドネシアの主要大学と連携し、実践的なエンジニア育成プログラムを展開しています。",
      "universities": {
        "stikomBali": "STIKOM Bali",
        "uinJakarta": "UIN Jakarta",
        "upi": "UPI",
        "unlaBandung": "UNLA Bandung",
        "uiFmipa": "UI FMIPA",
        "its": "ITS",
        "unej": "UNEJ"
      },
      "footer": "CONNECTING KNOWLEDGE ACROSS BORDERS"
    },
    "news": {
      "title": "お知らせ",
      "description": "最新のプログラム情報、パートナーシップ、イベント情報をお届けします。",
      "categories": {
        "program": "プログラム",
        "partnership": "パートナーシップ",
        "event": "イベント"
      },
      "status": {
        "new": "NEW",
        "important": "IMPORTANT", 
        "completed": "COMPLETED"
      },
      "readMore": "詳細を見る",
      "viewAll": "もっと見る",
      "footer": "STAY UPDATED WITH PAI"
    },
    "contact": {
      "title": "お問い合わせ",
      "description": "プログラムに関するご質問やご相談、お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。",
      "form": {
        "title": "お問い合わせフォーム",
        "name": "お名前",
        "email": "メールアドレス", 
        "organization": "ご所属（任意）",
        "inquiryType": "お問い合わせ内容",
        "message": "詳細メッセージ",
        "submit": "SEND_MESSAGE()",
        "sending": "SENDING...",
        "namePlaceholder": "山田太郎",
        "emailPlaceholder": "example@email.com",
        "organizationPlaceholder": "株式会社○○ / ○○大学 など",
        "messagePlaceholder": "お問い合わせの詳細をご記入ください...",
        "inquiryTypes": {
          "select": "--- 選択してください ---",
          "program": "プログラム内容について",
          "partnership": "パートナーシップについて",
          "university": "大学連携について", 
          "career": "キャリアサポートについて",
          "other": "その他"
        }
      },
      "footer": "WE'RE HERE TO HELP YOU SUCCEED"
    },
    "footer": {
      "description": "多様な人の知恵や文化を結びつけるコミュニティプラットフォーム。日本とインドネシアの人々とアイデアが出会い、共創し、より明るい未来を形作る場を提供します。",
      "contact": "CONTACT",
      "navigation": "NAVIGATION", 
      "copyright": "© 2025 PAI: People and Ideas. All rights reserved.",
      "madeWith": "Made with ❤️ in Japan & Indonesia"
    }
  },
  "id": {
    "meta": {
      "title": "PAI: People and Ideas",
      "description": "Platform komunitas yang menghubungkan kebijaksanaan dan budaya beragam untuk menciptakan masa depan yang lebih cerah antara Jepang dan Indonesia."
    },
    "navigation": {
      "about": "Tentang PAI",
      "curriculum": "Yang Dipelajari",
      "cooperators": "Mitra Kerjasama",
      "partners": "Partner", 
      "news": "Berita",
      "contact": "Kontak"
    },
    "hero": {
      "tagline": "People and Ideas connecting for a brighter future v2.0.1",
      "title": "PAI:",
      "subtitle": "People and Ideas",
      "slogan": "Where people and ideas shape a brighter future.",
      "description1": "Platform komunitas yang menghubungkan kebijaksanaan dan budaya yang beragam.",
      "description2": "Menyediakan tempat bagi orang-orang dan ide-ide dari Jepang dan Indonesia untuk bertemu dan berkolaborasi.",
      "buttons": {
        "moreInfo": "INFO_LEBIH()",
        "connect": "HUBUNGI_KAMI()"
      }
    },
    "about": {
      "title": "Apa itu PAI: People and Ideas",
      "description": "Platform komunitas yang menghubungkan kebijaksanaan dan budaya yang beragam. Menyediakan tempat bagi orang-orang dan ide-ide dari Jepang dan Indonesia untuk bertemu, berkolaborasi, dan membentuk masa depan yang lebih cerah.",
      "mission": "Tempat di mana budaya dan kebijaksanaan yang beragam bertemu, berbagi ide, belajar bersama, dan menciptakan bersama sebagai sebuah komunitas.",
      "features": {
        "culturalBridge": {
          "title": "Jembatan Budaya",
          "description": "Menghormati budaya dan nilai-nilai beragam dari Jepang dan Indonesia, menyediakan lingkungan di mana orang-orang dari latar belakang yang berbeda dapat memperdalam saling pengertian dan berkolaborasi."
        },
        "ideasExchange": {
          "title": "Pertukaran Ide", 
          "description": "Platform untuk berbagi ide-ide inovatif dan pemikiran kreatif secara bebas, memaksimalkan potensi individu dan kekuatan kecerdasan kolektif."
        },
        "collaborativeLearning": {
          "title": "Pembelajaran Kolaboratif",
          "description": "Komunitas pembelajaran di mana kita belajar dan tumbuh bersama, dengan peserta saling mengajar dan mendukung untuk meningkatkan keterampilan mereka."
        },
        "futureCreation": {
          "title": "Penciptaan Masa Depan",
          "description": "Membangun komunitas berkelanjutan yang menggabungkan kekuatan orang dan ide untuk menciptakan masa depan yang lebih baik bagi kedua negara dan dunia."
        }
      },
      "stats": {
        "countries": "Negara",
        "partners": "Partner", 
        "members": "Anggota",
        "ideas": "Ide"
      },
      "cta": {
        "ready": "SIAP BERGABUNG DENGAN KOMUNITAS KAMI?",
        "question": "Ingin menciptakan masa depan yang lebih baik bersama?",
        "explore": "JELAJAHI_LEBIH()",
        "connect": "HUBUNGI_SEKARANG()"
      },
      "footer": "WHERE PEOPLE AND IDEAS SHAPE THE FUTURE"
    },
    "curriculum": {
      "title": "Yang Dipelajari",
      "description": "Set keterampilan praktis untuk talenta digital generasi selanjutnya. Pelajari teknologi yang dibutuhkan di industri secara sistematis.",
      "courses": {
        "webDevelopment": {
          "title": "Pengembangan Web & E-commerce",
          "description": "Pelajari teknik konstruksi website modern dan situs e-commerce. Mencakup dari frontend hingga backend secara komprehensif."
        },
        "systemDevelopment": {
          "title": "Pengembangan Sistem", 
          "description": "Teknik konstruksi sistem tingkat enterprise. Kuasai desain arsitektur yang dapat diskalakan."
        },
        "mobileApp": {
          "title": "Pengembangan Aplikasi Mobile",
          "description": "Pengembangan cross-platform untuk iOS & Android. Juga pelajari metode pengembangan aplikasi native."
        },
        "serverInfra": {
          "title": "Infrastruktur Server",
          "description": "Infrastruktur cloud dan praktik DevOps. Kuasai operasi server modern dan metode deployment."
        },
        "aiMachineLearning": {
          "title": "AI & Machine Learning",
          "description": "Implementasi kecerdasan buatan dan data science. Pengembangan aplikasi menggunakan teknologi AI terkini."
        },
        "blockchain": {
          "title": "Pengembangan Blockchain",
          "description": "Pengembangan Web3, DApp, dan smart contract. Teknologi konstruksi aplikasi terdesentralisasi."
        }
      },
      "levels": {
        "beginner": "Pemula",
        "intermediate": "Menengah", 
        "advanced": "Lanjutan"
      },
      "footer": "LEARN BY DOING, GROW BY CREATING"
    },
    "cooperators": {
      "title": "Mitra Kerjasama",
      "description": "Membangun ekosistem pengembangan sumber daya manusia yang komprehensif melalui kolaborasi industri-akademisi-pemerintah.",
      "organizations": {
        "starup": {
          "title": "STARUP",
          "role": "Partner Inovasi Teknologi",
          "description": "Bertanggung jawab untuk penelitian dan pengembangan teknologi terdepan serta desain kurikulum praktis. Menyediakan program praktis yang mencerminkan tren industri dan mendukung peserta didik menjadi aset langsung di lapangan."
        },
        "sakuranesia": {
          "title": "Yayasan Sakuranesia",
          "role": "Partner Dukungan Pendidikan", 
          "description": "Menciptakan peluang pendidikan berkualitas melalui penyediaan dana pendidikan dan pengembangan lingkungan belajar. Membangun fondasi bagi banyak peserta didik untuk berpartisipasi dalam program melalui sistem beasiswa dan penyediaan fasilitas."
        },
        "government": {
          "title": "Lembaga Pemerintah",
          "role": "Partner Dukungan Kebijakan",
          "description": "Mendorong perumusan kebijakan dan pengembangan institusi terkait pengembangan sumber daya manusia digital. Mendukung ekosistem pengembangan sumber daya manusia berkelanjutan melalui promosi pertukaran talenta internasional dan pembangunan sistem sertifikasi kualifikasi."
        }
      },
      "footer": "STRONGER TOGETHER, BRIGHTER FUTURE"
    },
    "partners": {
      "title": "Partner", 
      "description": "Bermitra dengan universitas-universitas utama di Indonesia untuk mengembangkan program pelatihan insinyur yang praktis.",
      "universities": {
        "stikomBali": "STIKOM Bali",
        "uinJakarta": "UIN Jakarta",
        "upi": "UPI",
        "unlaBandung": "UNLA Bandung",
        "uiFmipa": "UI FMIPA",
        "its": "ITS",
        "unej": "UNEJ"
      },
      "footer": "CONNECTING KNOWLEDGE ACROSS BORDERS"
    },
    "news": {
      "title": "Berita",
      "description": "Menyampaikan informasi program terbaru, kemitraan, dan informasi acara.",
      "categories": {
        "program": "Program",
        "partnership": "Kemitraan",
        "event": "Acara"
      },
      "status": {
        "new": "BARU",
        "important": "PENTING", 
        "completed": "SELESAI"
      },
      "readMore": "Baca Selengkapnya",
      "viewAll": "Lihat Lebih Banyak",
      "footer": "STAY UPDATED WITH PAI"
    },
    "contact": {
      "title": "Kontak",
      "description": "Jangan ragu untuk menghubungi kami dengan pertanyaan atau inquiry apapun tentang program. Staf profesional kami akan dengan senang hati menjawab.",
      "form": {
        "title": "Formulir Kontak",
        "name": "Nama",
        "email": "Alamat Email", 
        "organization": "Organisasi (Opsional)",
        "inquiryType": "Jenis Pertanyaan",
        "message": "Pesan Detail",
        "submit": "KIRIM_PESAN()",
        "sending": "MENGIRIM...",
        "namePlaceholder": "John Doe",
        "emailPlaceholder": "example@email.com",
        "organizationPlaceholder": "Perusahaan ABC / Universitas XYZ dll.",
        "messagePlaceholder": "Silakan jelaskan pertanyaan Anda secara detail...",
        "inquiryTypes": {
          "select": "--- Silakan Pilih ---",
          "program": "Tentang Konten Program",
          "partnership": "Tentang Kemitraan",
          "university": "Tentang Kolaborasi Universitas", 
          "career": "Tentang Dukungan Karir",
          "other": "Lainnya"
        }
      },
      "footer": "WE'RE HERE TO HELP YOU SUCCEED"
    },
    "footer": {
      "description": "Platform komunitas yang menghubungkan kebijaksanaan dan budaya beragam dari orang-orang Jepang dan Indonesia. Menyediakan tempat bagi orang dan ide untuk bertemu, berkolaborasi, dan berkontribusi pada pembangunan berkelanjutan kedua negara.",
      "contact": "KONTAK",
      "navigation": "NAVIGASI", 
      "copyright": "© 2025 PAI: People and Ideas. All rights reserved.",
      "madeWith": "Made with ❤️ in Japan & Indonesia"
    }
  }
}
```

## ⚙️ 技術実装

### 1. useLanguage Hook（3言語対応版）
```typescript
// hooks/useLanguage.ts
import { useState, useEffect } from 'react';
import translations from '@/data/translations.json';

type Language = 'en' | 'ja' | 'id';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en'); // デフォルト英語

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ja', 'id'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'en': return 'English';
      case 'ja': return '日本語';
      case 'id': return 'Bahasa Indonesia';
      default: return lang;
    }
  };

  return { language, changeLanguage, t, getLanguageLabel };
};
```

### 2. 右下トースト言語切り替えコンポーネント
```typescript
// components/LanguageToast.tsx
'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToast() {
  const { language, changeLanguage, getLanguageLabel } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['en', 'ja', 'id'] as const;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--color-accent-primary)] text-black px-4 py-2 rounded-lg font-mono text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-lg"
      >
        {getLanguageLabel(language)}
      </button>

      {/* Language Options */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg shadow-xl min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                changeLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-sm font-mono text-left hover:bg-[var(--color-bg-secondary)] first:rounded-t-lg last:rounded-b-lg transition-colors ${
                language === lang 
                  ? 'bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]' 
                  : 'text-[var(--color-text-primary)]'
              }`}
            >
              {getLanguageLabel(lang)}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
```

### 3. 各コンポーネントの更新例
```typescript
// section/Hero.tsx（更新版）
import { useLanguage } from '@/hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section>
      <div className="font-mono text-sm">
        <span>{t('hero.tagline')}</span>
      </div>
      
      <div className="font-mono text-4xl md:text-8xl font-black">
        <div className="mb-4">
          <span className="text-[var(--color-accent-primary)]">{t('hero.title')}</span>
        </div>
        <div className="text-2xl md:text-4xl">
          {t('hero.subtitle')}
        </div>
        <div className="text-lg md:text-2xl">
          {t('hero.slogan')}
        </div>
      </div>
      
      <div className="space-y-2">
        <div>
          <span className="text-[var(--color-text-meta)]">{'// '}</span>
          <span>{t('hero.description1')}</span>
        </div>
        <div>
          <span className="text-[var(--color-text-meta)]">{'// '}</span>
          <span>{t('hero.description2')}</span>
        </div>
      </div>
      
      <div className="flex space-x-6">
        <button>{t('hero.buttons.moreInfo')}</button>
        <button>{t('hero.buttons.connect')}</button>
      </div>
    </section>
  );
}
```

### 4. layout.tsx メタデータ対応
```typescript
// app/layout.tsx（更新版）
import { useLanguage } from '@/hooks/useLanguage';

export function generateMetadata() {
  // この部分は実際の実装では少し異なる手法が必要
  return {
    title: 'PAI: People and Ideas',
    description: 'A community platform connecting diverse people and ideas...'
  };
}
```

## 📅 実装スケジュール

### Phase 1: 基盤構築（2-3日）
1. **translations.json作成**
   - 英語版（既存コンテンツベース）
   - 日本語版（既存の日本語コンテンツ活用）
   - インドネシア語版（新規翻訳）

2. **システム実装**
   - useLanguage Hook作成
   - LanguageToast コンポーネント作成

### Phase 2: コンポーネント更新（3-4日）
1. **各セクション更新**
   - Header.tsx
   - Hero.tsx
   - About.tsx
   - Curriculum.tsx
   - Cooperators.tsx
   - Partners.tsx
   - News.tsx
   - Contact.tsx
   - Footer.tsx

### Phase 3: 最終調整（1-2日）
1. **レイアウト対応**
   - app/layout.tsx のメタデータ多言語対応
   - フォント調整（日本語・インドネシア語）

2. **テスト・最適化**
   - 全機能テスト
   - レスポンシブ確認
   - パフォーマンス最適化

## 🎯 実装の特徴・利点

### 過去実装との違い
1. **3言語対応**: 英語・日本語・インドネシア語
2. **デフォルト英語**: グローバルアクセシビリティ重視
3. **トースト UI**: 固定位置で常にアクセス可能
4. **PAI ブランド**: People and Ideas のコンセプト
5. **現在のディレクトリ構造**: Next.js App Router対応

### 技術的メリット
1. **軽量実装**: 複雑なルーティング不要
2. **既存構造維持**: 現在のコンポーネント構造をそのまま活用
3. **型安全性**: TypeScript完全対応
4. **保守性**: テーマ機能と同様のパターン
5. **パフォーマンス**: JSONファイル1つで全言語管理

### UX/UI 的メリット  
1. **固定アクセス**: 右下トーストでどのページからでもアクセス可能
2. **直感的操作**: ワンクリックで言語切り替え
3. **視覚的フィードバック**: 現在の言語が明確に表示
4. **一貫性**: テーマトグルと同様のデザインパターン

## 🚀 実装開始の準備

### 必要なパッケージ（追加不要）
- 既存のReact/Next.js環境で実装可能
- 外部ライブラリ不要（軽量実装）

### 実装順序の推奨
1. `src/data/translations.json` 作成
2. `src/hooks/useLanguage.ts` 実装  
3. `src/components/LanguageToast.tsx` 作成
4. `src/app/layout.tsx` にLanguageToast追加
5. 各セクションコンポーネントを段階的に更新

この計画に沿って実装を開始できます。どのPhaseから始めますか？