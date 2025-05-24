export type Language = "en" | "vi"

export interface Translations {
  // Navigation
  nav: {
    notes: string
    dashboard: string
    formulas: string
    account: string
    profile: string
    settings: string
  }

  // Common
  common: {
    save: string
    cancel: string
    delete: string
    edit: string
    add: string
    back: string
    next: string
    continue: string
    start: string
    loading: string
    search: string
    filter: string
    all: string
    online: string
    offline: string
    important: string
    medium: string
    low: string
    high: string
    week: string
    month: string
    day: string
    hour: string
    minute: string
  }

  // Home page
  home: {
    title: string
    subtitle: string
    welcomeMessage: string
    suggestions: {
      analyzeBTC: string
      analyzeETH: string
      checkPortfolio: string
      suggestCoins: string
    }
    portfolio: {
      title: string
      totalValue: string
      analyzeWithAI: string
    }
    chat: {
      placeholder: string
      analyzing: string
      typing: string
    }
  }

  // Onboarding
  onboarding: {
    welcome: {
      title: string
      subtitle: string
      name: string
      email: string
      namePlaceholder: string
      emailPlaceholder: string
    }
    goals: {
      title: string
      subtitle: string
      shortTerm: {
        title: string
        description: string
      }
      longTerm: {
        title: string
        description: string
      }
      mixed: {
        title: string
        description: string
      }
    }
    risk: {
      title: string
      subtitle: string
      low: {
        title: string
        description: string
      }
      medium: {
        title: string
        description: string
      }
      high: {
        title: string
        description: string
      }
    }
    coins: {
      title: string
      subtitle: string
      types: {
        btc: {
          name: string
          desc: string
        }
        eth: {
          name: string
          desc: string
        }
        altcoin: {
          name: string
          desc: string
        }
        defi: {
          name: string
          desc: string
        }
        stablecoin: {
          name: string
          desc: string
        }
        memecoin: {
          name: string
          desc: string
        }
      }
    }
    complete: {
      title: string
      subtitle: string
      connectBinance: string
      connectDescription: string
      profileSummary: string
      goal: string
      risk: string
      preferredCoins: string
      goalTypes: {
        shortTerm: string
        longTerm: string
        mixed: string
      }
      riskLevels: {
        low: string
        medium: string
        high: string
      }
    }
    step: string
  }

  // Formulas
  formulas: {
    title: string
    subtitle: string
    tabs: {
      fundamental: string
      technical: string
      risk: string
      checklist: string
    }
    fundamental: {
      title: string
      addRule: string
      ruleName: string
      weight: string
      description: string
      ruleNamePlaceholder: string
      descriptionPlaceholder: string
    }
    technical: {
      title: string
      addIndicator: string
      indicatorName: string
      condition: string
      buy: string
      sell: string
      neutral: string
      indicatorPlaceholder: string
      conditionPlaceholder: string
    }
    risk: {
      title: string
      addRule: string
      limit: string
      ruleNamePlaceholder: string
      descriptionPlaceholder: string
      max: string
    }
    checklist: {
      title: string
      categories: {
        research: string
        entry: string
        exit: string
        risk: string
      }
      items: {
        readWhitepaper: string
        checkTeam: string
        analyzeCompetitors: string
        determineEntry: string
        calculatePosition: string
        setTakeProfit: string
        setStopLoss: string
        checkCorrelation: string
      }
    }
    saveFormula: string
  }

  // Dashboard
  dashboard: {
    title: string
    subtitle: string
    stats: {
      interactions: string
      aiQuestions: string
      coinsResearched: string
      learningPoints: string
      streakDays: string
      analyses: string
    }
    timeline: {
      title: string
      events: {
        analysis: string
        learning: string
        chat: string
        milestone: string
      }
      descriptions: {
        portfolioAnalysis: string
        dcaLearning: string
        layer2Question: string
        milestone100: string
        memecoinAnalysis: string
      }
      importance: {
        high: string
        medium: string
        low: string
      }
    }
    weeklySummary: string
    coinsResearched: string
    topTopics: string
    learningPoints: string
    chats: string
  }

  // Notes
  notes: {
    title: string
    subtitle: string
    tabs: {
      history: string
      learning: string
    }
    search: string
    exportPDF: string
    keyInsights: string
    explanation: string
    example: string
    aiAdvisor: string
    selfResearch: string
    chatHistory: {
      btcDcaTitle: string
      btcDcaSummary: string
      riskAssessmentTitle: string
      riskAssessmentSummary: string
      layer2Title: string
      layer2Summary: string
    }
    learningNotes: {
      dcaConcept: string
      dcaExplanation: string
      dcaExample: string
      supportResistanceConcept: string
      supportResistanceExplanation: string
      supportResistanceExample: string
      tvlConcept: string
      tvlExplanation: string
      tvlExample: string
    }
    tags: {
      strategy: string
      riskManagement: string
      technicalAnalysis: string
      defi: string
      metrics: string
      layer2: string
      technology: string
      portfolio: string
      altcoin: string
    }
  }

  // Settings
  settings: {
    title: string
    subtitle: string
    advisingStyle: {
      title: string
      howAiResponds: string
      simple: {
        title: string
        description: string
      }
      detailed: {
        title: string
        description: string
      }
      professional: {
        title: string
        description: string
      }
    }
    responseLength: {
      title: string
      short: string
      medium: string
      long: string
    }
    focusArea: {
      title: string
      aiFocusOn: string
      technical: string
      news: string
      psychology: string
      balanced: string
    }
    features: {
      title: string
      riskWarnings: {
        title: string
        description: string
      }
      marketUpdates: {
        title: string
        description: string
      }
      learningMode: {
        title: string
        description: string
      }
      confidenceThreshold: {
        title: string
        description: string
      }
    }
    dataManagement: {
      title: string
      exportData: {
        title: string
        description: string
        button: string
      }
      resetKnowledge: {
        title: string
        description: string
        button: string
      }
      deleteData: {
        title: string
        description: string
        button: string
      }
    }
    saveChanges: string
    saved: string
    restoreDefaults: string
  }

  // AI Analysis
  analysis: {
    analyzing: string
    overallScore: string
    fundamental: string
    technical: string
    risk: string
    ruleViolations: string
    recommendations: string
    checklist: string
    pass: string
    fail: string
    warning: string
    needsReview: string
    notCompleted: string
    analyzeButton: string
    accordingToFormula: string
  }

  // Coin data
  coins: {
    price: string
    change24h: string
    volume: string
    marketCap: string
    volatility: string
    riskLevel: string
    socialTrend: string
    askAIMore: string
    details: string
    chartTitle: string
    analysis: string
    low: string
    medium: string
    high: string
    bullish: string
    bearish: string
    neutral: string
  }
}

export const translations: Record<Language, Translations> = {
  vi: {
    nav: {
      notes: "Ghi chú",
      dashboard: "Dashboard",
      formulas: "Công thức",
      account: "Tài khoản",
      profile: "Hồ sơ đầu tư",
      settings: "Cài đặt AI",
    },
    common: {
      save: "Lưu",
      cancel: "Hủy",
      delete: "Xóa",
      edit: "Sửa",
      add: "Thêm",
      back: "Quay lại",
      next: "Tiếp tục",
      continue: "Tiếp tục",
      start: "Bắt đầu",
      loading: "Đang tải...",
      search: "Tìm kiếm",
      filter: "Lọc",
      all: "Tất cả",
      online: "Online",
      offline: "Offline",
      important: "Quan trọng",
      medium: "Trung bình",
      low: "Thấp",
      high: "Cao",
      week: "tuần",
      month: "tháng",
      day: "ngày",
      hour: "giờ",
      minute: "phút",
    },
    home: {
      title: "CryptoAI",
      subtitle: "Đồng hành cùng bạn trong đầu tư",
      welcomeMessage:
        "Chào bạn! Tôi đã học được công thức đầu tư cá nhân của bạn. Bây giờ tôi sẽ phân tích và tư vấn dựa trên quy tắc riêng của bạn. Bạn muốn phân tích coin nào?",
      suggestions: {
        analyzeBTC: "Phân tích BTC",
        analyzeETH: "Phân tích ETH",
        checkPortfolio: "Kiểm tra portfolio",
        suggestCoins: "Đề xuất coin mới",
      },
      portfolio: {
        title: "Danh mục",
        totalValue: "Tổng giá trị",
        analyzeWithAI: "Phân tích bằng AI",
      },
      chat: {
        placeholder: "Hỏi AI phân tích...",
        analyzing: "Đang phân tích theo công thức của bạn...",
        typing: "AI đang soạn tin nhắn...",
      },
    },
    onboarding: {
      welcome: {
        title: "Chào mừng đến CryptoAI",
        subtitle: "Trợ lý AI thông minh cho hành trình đầu tư crypto của bạn",
        name: "Tên của bạn",
        email: "Email",
        namePlaceholder: "Nhập tên của bạn",
        emailPlaceholder: "your@email.com",
      },
      goals: {
        title: "Mục tiêu đầu tư của bạn?",
        subtitle: "Giúp AI hiểu rõ hơn về định hướng của bạn",
        shortTerm: {
          title: "Lãi ngắn hạn",
          description: "Trading, kiếm lời nhanh trong vài tuần/tháng",
        },
        longTerm: {
          title: "Tích sản dài hạn",
          description: "HODL, xây dựng tài sản trong nhiều năm",
        },
        mixed: {
          title: "Kết hợp cả hai",
          description: "Vừa trading vừa đầu tư dài hạn",
        },
      },
      risk: {
        title: "Mức độ rủi ro chấp nhận?",
        subtitle: "AI sẽ tư vấn phù hợp với khả năng chịu rủi ro của bạn",
        low: {
          title: "Thấp",
          description: "Ưu tiên BTC, ETH, stablecoin",
        },
        medium: {
          title: "Vừa phải",
          description: "Thêm altcoin top 20, DeFi",
        },
        high: {
          title: "Cao",
          description: "Sẵn sàng với memecoin, coin mới",
        },
      },
      coins: {
        title: "Loại coin ưa thích?",
        subtitle: "Chọn nhiều loại để AI tư vấn đa dạng hơn",
        types: {
          btc: {
            name: "Bitcoin",
            desc: "Store of value",
          },
          eth: {
            name: "Ethereum",
            desc: "Smart contracts",
          },
          altcoin: {
            name: "Altcoin",
            desc: "Top 50 coins",
          },
          defi: {
            name: "DeFi",
            desc: "Decentralized finance",
          },
          stablecoin: {
            name: "Stablecoin",
            desc: "USDT, USDC...",
          },
          memecoin: {
            name: "Memecoin",
            desc: "DOGE, SHIB...",
          },
        },
      },
      complete: {
        title: "Hoàn tất thiết lập",
        subtitle: "Tùy chọn kết nối sàn giao dịch để theo dõi portfolio",
        connectBinance: "Kết nối Binance API",
        connectDescription: "Tự động đồng bộ portfolio (tùy chọn)",
        profileSummary: "Hồ sơ của bạn:",
        goal: "Mục tiêu",
        risk: "Rủi ro",
        preferredCoins: "Coin ưa thích",
        goalTypes: {
          shortTerm: "Lãi ngắn hạn",
          longTerm: "Tích sản dài hạn",
          mixed: "Kết hợp",
        },
        riskLevels: {
          low: "Thấp",
          medium: "Vừa phải",
          high: "Cao",
        },
      },
      step: "Bước",
    },
    formulas: {
      title: "Công thức đầu tư cá nhân",
      subtitle: "Xây dựng hệ thống phân tích và quy tắc đầu tư riêng của bạn",
      tabs: {
        fundamental: "Phân tích cơ bản",
        technical: "Phân tích kỹ thuật",
        risk: "Quản lý rủi ro",
        checklist: "Checklist",
      },
      fundamental: {
        title: "Quy tắc phân tích cơ bản",
        addRule: "Thêm quy tắc",
        ruleName: "Tên quy tắc",
        weight: "Trọng số (%)",
        description: "Mô tả chi tiết",
        ruleNamePlaceholder: "VD: Community & Ecosystem",
        descriptionPlaceholder: "VD: Community active, partnerships mạnh, ecosystem phát triển",
      },
      technical: {
        title: "Chỉ báo kỹ thuật",
        addIndicator: "Thêm chỉ báo",
        indicatorName: "Tên chỉ báo",
        condition: "Điều kiện",
        buy: "Mua",
        sell: "Bán",
        neutral: "Trung tính",
        indicatorPlaceholder: "VD: Bollinger Bands",
        conditionPlaceholder: "VD: Giá chạm lower band và RSI < 30",
      },
      risk: {
        title: "Quy tắc quản lý rủi ro",
        addRule: "Thêm quy tắc",
        limit: "Giới hạn (%)",
        ruleNamePlaceholder: "VD: New Coin Limit",
        descriptionPlaceholder: "VD: Coin mới ra mắt < 6 tháng không quá 3%",
        max: "Max",
      },
      checklist: {
        title: "Checklist đầu tư",
        categories: {
          research: "Nghiên cứu",
          entry: "Vào lệnh",
          exit: "Thoát lệnh",
          risk: "Quản lý rủi ro",
        },
        items: {
          readWhitepaper: "Đọc whitepaper",
          checkTeam: "Kiểm tra team & advisors",
          analyzeCompetitors: "Phân tích competitors",
          determineEntry: "Xác định entry point",
          calculatePosition: "Tính toán position size",
          setTakeProfit: "Đặt take profit levels",
          setStopLoss: "Đặt stop loss",
          checkCorrelation: "Kiểm tra correlation với BTC",
        },
      },
      saveFormula: "Lưu công thức đầu tư",
    },
    dashboard: {
      title: "Dashboard cá nhân",
      subtitle: "Theo dõi hành trình đầu tư và học tập của bạn",
      stats: {
        interactions: "Tương tác",
        aiQuestions: "Câu hỏi AI",
        coinsResearched: "Coin nghiên cứu",
        learningPoints: "Điểm học tập",
        streakDays: "Ngày liên tiếp",
        analyses: "Phân tích",
      },
      timeline: {
        title: "Timeline hoạt động",
        events: {
          analysis: "AI phân tích portfolio",
          learning: "Học về DCA strategy",
          chat: "Hỏi về Layer 2 solutions",
          milestone: "Đạt 100 tương tác với AI",
        },
        descriptions: {
          portfolioAnalysis: "Đề xuất giảm tỷ trọng altcoin từ 60% xuống 40%",
          dcaLearning: "Hiểu rõ cách áp dụng Dollar Cost Averaging hiệu quả",
          layer2Question: "Tìm hiểu Arbitrum vs Optimism, so sánh TVL và ecosystem",
          milestone100: "Hoàn thành mốc 100 câu hỏi đầu tiên",
          memecoinAnalysis: "AI cảnh báo về rủi ro cao của SHIB và DOGE",
        },
        importance: {
          high: "Quan trọng",
          medium: "Trung bình",
          low: "Thấp",
        },
      },
      weeklySummary: "Tóm tắt theo tuần",
      coinsResearched: "Coins nghiên cứu:",
      topTopics: "Chủ đề chính:",
      learningPoints: "Điểm học tập:",
      chats: "chats",
    },
    notes: {
      title: "Ghi chú & Lịch sử",
      subtitle: "Lưu trữ kiến thức và theo dõi hành trình học tập của bạn",
      tabs: {
        history: "Lịch sử Chat",
        learning: "Kiến thức đã học",
      },
      search: "Tìm kiếm ghi chú, cuộc trò chuyện...",
      exportPDF: "Xuất PDF",
      keyInsights: "Điểm chính:",
      explanation: "Giải thích:",
      example: "Ví dụ:",
      aiAdvisor: "AI Advisor",
      selfResearch: "Tự nghiên cứu",
      chatHistory: {
        btcDcaTitle: "Phân tích BTC và chiến lược DCA",
        btcDcaSummary:
          "AI tư vấn về việc DCA Bitcoin trong bối cảnh thị trường sideway. Đề xuất chia nhỏ số tiền đầu tư trong 4 tuần.",
        riskAssessmentTitle: "Đánh giá rủi ro altcoin portfolio",
        riskAssessmentSummary:
          "Phân tích tỷ trọng altcoin trong danh mục. AI khuyên giảm exposure với memecoin và tăng ETH.",
        layer2Title: "Tìm hiểu về Layer 2 và Arbitrum",
        layer2Summary:
          "Cuộc trò chuyện về công nghệ Layer 2, so sánh Arbitrum vs Optimism. AI giải thích cách hoạt động và tiềm năng.",
      },
      learningNotes: {
        dcaConcept: "Dollar Cost Averaging (DCA)",
        dcaExplanation:
          "Chiến lược đầu tư định kỳ với số tiền cố định, bất kể giá cả thị trường. Giúp giảm thiểu rủi ro timing và tận dụng volatility.",
        dcaExample: "Thay vì đầu tư $1000 một lần, bạn đầu tư $250 mỗi tuần trong 4 tuần.",
        supportResistanceConcept: "Support và Resistance",
        supportResistanceExplanation:
          "Support là mức giá mà tài sản khó giảm xuống dưới. Resistance là mức giá khó vượt lên trên. Đây là các mức tâm lý quan trọng.",
        supportResistanceExample: "BTC có support mạnh tại $65,000 và resistance tại $70,000",
        tvlConcept: "Total Value Locked (TVL)",
        tvlExplanation:
          "Tổng giá trị tài sản được khóa trong một protocol DeFi. Chỉ số này phản ánh mức độ tin tưởng và sử dụng của người dùng.",
        tvlExample: "Arbitrum có TVL $2.5B, cho thấy nhiều người dùng tin tưởng và sử dụng",
      },
      tags: {
        strategy: "Strategy",
        riskManagement: "Risk Management",
        technicalAnalysis: "Technical Analysis",
        defi: "DeFi",
        metrics: "Metrics",
        layer2: "Layer2",
        technology: "Technology",
        portfolio: "Portfolio",
        altcoin: "Altcoin",
      },
    },
    settings: {
      title: "Cài đặt trải nghiệm AI",
      subtitle: "Tùy chỉnh cách AI tư vấn và tương tác với bạn",
      advisingStyle: {
        title: "Phong cách tư vấn",
        howAiResponds: "Cách AI trả lời",
        simple: {
          title: "Đơn giản",
          description: "Giải thích dễ hiểu, phù hợp người mới",
        },
        detailed: {
          title: "Chi tiết",
          description: "Giải thích sâu với ví dụ cụ thể",
        },
        professional: {
          title: "Chuyên nghiệp",
          description: "Phong cách trader chuyên nghiệp",
        },
      },
      responseLength: {
        title: "Độ dài phản hồi",
        short: "Ngắn gọn (1-2 câu)",
        medium: "Vừa phải (1 đoạn)",
        long: "Chi tiết (nhiều đoạn)",
      },
      focusArea: {
        title: "Lĩnh vực tập trung",
        aiFocusOn: "AI nên nghiêng về",
        technical: "Phân tích kỹ thuật (charts, indicators)",
        news: "Tin tức & sự kiện thị trường",
        psychology: "Tâm lý thị trường & risk management",
        balanced: "Cân bằng tất cả",
      },
      features: {
        title: "Tính năng & thông báo",
        riskWarnings: {
          title: "Cảnh báo rủi ro",
          description: "AI sẽ nhắc nhở về rủi ro khi cần",
        },
        marketUpdates: {
          title: "Cập nhật thị trường",
          description: "Nhận thông tin thị trường định kỳ",
        },
        learningMode: {
          title: "Chế độ học tập",
          description: "AI sẽ giải thích thuật ngữ và khái niệm",
        },
        confidenceThreshold: {
          title: "Ngưỡng tin cậy AI",
          description: "AI chỉ đưa ra lời khuyên khi độ tin cậy ≥",
        },
      },
      dataManagement: {
        title: "Quản lý dữ liệu",
        exportData: {
          title: "Xuất dữ liệu",
          description: "Tải về tất cả dữ liệu cá nhân",
          button: "Xuất",
        },
        resetKnowledge: {
          title: "Reset kiến thức AI",
          description: "Xóa lịch sử học tập, bắt đầu lại",
          button: "Reset",
        },
        deleteData: {
          title: "Xóa tất cả dữ liệu",
          description: "Hành động này không thể hoàn tác",
          button: "Xóa",
        },
      },
      saveChanges: "Lưu thay đổi",
      saved: "Đã lưu",
      restoreDefaults: "Khôi phục mặc định",
    },
    analysis: {
      analyzing: "AI đang phân tích",
      overallScore: "Điểm tổng",
      fundamental: "Cơ bản",
      technical: "Kỹ thuật",
      risk: "Rủi ro",
      ruleViolations: "Cảnh báo vi phạm quy tắc:",
      recommendations: "Khuyến nghị AI",
      checklist: "Checklist đầu tư",
      pass: "OK",
      fail: "Chưa xong",
      warning: "Cần xem",
      needsReview: "Cần xem",
      notCompleted: "Chưa xong",
      analyzeButton: "Phân tích",
      accordingToFormula: "theo công thức của bạn",
    },
    coins: {
      price: "Giá",
      change24h: "24h",
      volume: "Volume 24h",
      marketCap: "Market Cap",
      volatility: "Volatility",
      riskLevel: "Risk",
      socialTrend: "Social",
      askAIMore: "Hỏi AI thêm",
      details: "Chi tiết",
      chartTitle: "Biểu đồ giá 7 ngày",
      analysis: "Phân tích tổng quan",
      low: "thấp",
      medium: "vừa",
      high: "cao",
      bullish: "tăng",
      bearish: "giảm",
      neutral: "trung tính",
    },
  },
  en: {
    nav: {
      notes: "Notes",
      dashboard: "Dashboard",
      formulas: "Formulas",
      account: "Account",
      profile: "Investment Profile",
      settings: "AI Settings",
    },
    common: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      add: "Add",
      back: "Back",
      next: "Next",
      continue: "Continue",
      start: "Start",
      loading: "Loading...",
      search: "Search",
      filter: "Filter",
      all: "All",
      online: "Online",
      offline: "Offline",
      important: "Important",
      medium: "Medium",
      low: "Low",
      high: "High",
      week: "week",
      month: "month",
      day: "day",
      hour: "hour",
      minute: "minute",
    },
    home: {
      title: "CryptoAI",
      subtitle: "Your intelligent crypto investment companion",
      welcomeMessage:
        "Hello! I have learned your personal investment formula. Now I will analyze and advise based on your specific rules. Which coin would you like me to analyze?",
      suggestions: {
        analyzeBTC: "Analyze BTC",
        analyzeETH: "Analyze ETH",
        checkPortfolio: "Check Portfolio",
        suggestCoins: "Suggest New Coins",
      },
      portfolio: {
        title: "Portfolio",
        totalValue: "Total Value",
        analyzeWithAI: "Analyze with AI",
      },
      chat: {
        placeholder: "Ask AI to analyze...",
        analyzing: "Analyzing according to your formula...",
        typing: "AI is typing...",
      },
    },
    onboarding: {
      welcome: {
        title: "Welcome to CryptoAI",
        subtitle: "Your intelligent AI assistant for crypto investment journey",
        name: "Your Name",
        email: "Email",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "your@email.com",
      },
      goals: {
        title: "What are your investment goals?",
        subtitle: "Help AI understand your direction better",
        shortTerm: {
          title: "Short-term Gains",
          description: "Trading, quick profits in weeks/months",
        },
        longTerm: {
          title: "Long-term Wealth",
          description: "HODL, building wealth over years",
        },
        mixed: {
          title: "Mixed Approach",
          description: "Both trading and long-term investing",
        },
      },
      risk: {
        title: "Risk tolerance level?",
        subtitle: "AI will advise according to your risk capacity",
        low: {
          title: "Low",
          description: "Prefer BTC, ETH, stablecoins",
        },
        medium: {
          title: "Medium",
          description: "Include top 20 altcoins, DeFi",
        },
        high: {
          title: "High",
          description: "Open to memecoins, new coins",
        },
      },
      coins: {
        title: "Preferred coin types?",
        subtitle: "Choose multiple types for diverse AI advice",
        types: {
          btc: {
            name: "Bitcoin",
            desc: "Store of value",
          },
          eth: {
            name: "Ethereum",
            desc: "Smart contracts",
          },
          altcoin: {
            name: "Altcoin",
            desc: "Top 50 coins",
          },
          defi: {
            name: "DeFi",
            desc: "Decentralized finance",
          },
          stablecoin: {
            name: "Stablecoin",
            desc: "USDT, USDC...",
          },
          memecoin: {
            name: "Memecoin",
            desc: "DOGE, SHIB...",
          },
        },
      },
      complete: {
        title: "Setup Complete",
        subtitle: "Optional: Connect exchange to track portfolio",
        connectBinance: "Connect Binance API",
        connectDescription: "Auto-sync portfolio (optional)",
        profileSummary: "Your Profile:",
        goal: "Goal",
        risk: "Risk",
        preferredCoins: "Preferred Coins",
        goalTypes: {
          shortTerm: "Short-term Gains",
          longTerm: "Long-term Wealth",
          mixed: "Mixed Approach",
        },
        riskLevels: {
          low: "Low",
          medium: "Medium",
          high: "High",
        },
      },
      step: "Step",
    },
    formulas: {
      title: "Personal Investment Formula",
      subtitle: "Build your own analysis system and investment rules",
      tabs: {
        fundamental: "Fundamental Analysis",
        technical: "Technical Analysis",
        risk: "Risk Management",
        checklist: "Checklist",
      },
      fundamental: {
        title: "Fundamental Analysis Rules",
        addRule: "Add Rule",
        ruleName: "Rule Name",
        weight: "Weight (%)",
        description: "Detailed Description",
        ruleNamePlaceholder: "e.g., Community & Ecosystem",
        descriptionPlaceholder: "e.g., Active community, strong partnerships, growing ecosystem",
      },
      technical: {
        title: "Technical Indicators",
        addIndicator: "Add Indicator",
        indicatorName: "Indicator Name",
        condition: "Condition",
        buy: "Buy",
        sell: "Sell",
        neutral: "Neutral",
        indicatorPlaceholder: "e.g., Bollinger Bands",
        conditionPlaceholder: "e.g., Price touches lower band and RSI < 30",
      },
      risk: {
        title: "Risk Management Rules",
        addRule: "Add Rule",
        limit: "Limit (%)",
        ruleNamePlaceholder: "e.g., New Coin Limit",
        descriptionPlaceholder: "e.g., Coins launched < 6 months max 3%",
        max: "Max",
      },
      checklist: {
        title: "Investment Checklist",
        categories: {
          research: "Research",
          entry: "Entry",
          exit: "Exit",
          risk: "Risk Management",
        },
        items: {
          readWhitepaper: "Read whitepaper",
          checkTeam: "Check team & advisors",
          analyzeCompetitors: "Analyze competitors",
          determineEntry: "Determine entry point",
          calculatePosition: "Calculate position size",
          setTakeProfit: "Set take profit levels",
          setStopLoss: "Set stop loss",
          checkCorrelation: "Check correlation with BTC",
        },
      },
      saveFormula: "Save Investment Formula",
    },
    dashboard: {
      title: "Personal Dashboard",
      subtitle: "Track your investment and learning journey",
      stats: {
        interactions: "Interactions",
        aiQuestions: "AI Questions",
        coinsResearched: "Coins Researched",
        learningPoints: "Learning Points",
        streakDays: "Streak Days",
        analyses: "Analyses",
      },
      timeline: {
        title: "Activity Timeline",
        events: {
          analysis: "AI portfolio analysis",
          learning: "Learned about DCA strategy",
          chat: "Asked about Layer 2 solutions",
          milestone: "Reached 100 AI interactions",
        },
        descriptions: {
          portfolioAnalysis: "Suggested reducing altcoin allocation from 60% to 40%",
          dcaLearning: "Understood how to effectively apply Dollar Cost Averaging",
          layer2Question: "Explored Arbitrum vs Optimism, compared TVL and ecosystem",
          milestone100: "Completed first 100 questions milestone",
          memecoinAnalysis: "AI warned about high risks of SHIB and DOGE",
        },
        importance: {
          high: "Important",
          medium: "Medium",
          low: "Low",
        },
      },
      weeklySummary: "Weekly Summary",
      coinsResearched: "Coins researched:",
      topTopics: "Top topics:",
      learningPoints: "Learning points:",
      chats: "chats",
    },
    notes: {
      title: "Notes & History",
      subtitle: "Store knowledge and track your learning journey",
      tabs: {
        history: "Chat History",
        learning: "Knowledge Learned",
      },
      search: "Search notes, conversations...",
      exportPDF: "Export PDF",
      keyInsights: "Key Insights:",
      explanation: "Explanation:",
      example: "Example:",
      aiAdvisor: "AI Advisor",
      selfResearch: "Self Research",
      chatHistory: {
        btcDcaTitle: "BTC Analysis and DCA Strategy",
        btcDcaSummary:
          "AI advised on DCA Bitcoin in sideways market context. Suggested splitting investment amount over 4 weeks.",
        riskAssessmentTitle: "Altcoin Portfolio Risk Assessment",
        riskAssessmentSummary:
          "Analyzed altcoin allocation in portfolio. AI recommended reducing memecoin exposure and increasing ETH.",
        layer2Title: "Learning about Layer 2 and Arbitrum",
        layer2Summary:
          "Conversation about Layer 2 technology, comparing Arbitrum vs Optimism. AI explained how they work and their potential.",
      },
      learningNotes: {
        dcaConcept: "Dollar Cost Averaging (DCA)",
        dcaExplanation:
          "Investment strategy of investing fixed amounts periodically regardless of market price. Helps minimize timing risk and take advantage of volatility.",
        dcaExample: "Instead of investing $1000 at once, you invest $250 each week for 4 weeks.",
        supportResistanceConcept: "Support and Resistance",
        supportResistanceExplanation:
          "Support is a price level that an asset struggles to fall below. Resistance is a price level that's hard to break above. These are important psychological levels.",
        supportResistanceExample: "BTC has strong support at $65,000 and resistance at $70,000",
        tvlConcept: "Total Value Locked (TVL)",
        tvlExplanation:
          "Total value of assets locked in a DeFi protocol. This metric reflects user trust and usage of the protocol.",
        tvlExample: "Arbitrum has $2.5B TVL, showing many users trust and use it",
      },
      tags: {
        strategy: "Strategy",
        riskManagement: "Risk Management",
        technicalAnalysis: "Technical Analysis",
        defi: "DeFi",
        metrics: "Metrics",
        layer2: "Layer2",
        technology: "Technology",
        portfolio: "Portfolio",
        altcoin: "Altcoin",
      },
    },
    settings: {
      title: "AI Experience Settings",
      subtitle: "Customize how AI advises and interacts with you",
      advisingStyle: {
        title: "Advising Style",
        howAiResponds: "How AI responds",
        simple: {
          title: "Simple",
          description: "Easy explanations, suitable for beginners",
        },
        detailed: {
          title: "Detailed",
          description: "Deep explanations with specific examples",
        },
        professional: {
          title: "Professional",
          description: "Professional trader style",
        },
      },
      responseLength: {
        title: "Response length",
        short: "Short (1-2 sentences)",
        medium: "Medium (1 paragraph)",
        long: "Detailed (multiple paragraphs)",
      },
      focusArea: {
        title: "Focus Area",
        aiFocusOn: "AI should focus on",
        technical: "Technical analysis (charts, indicators)",
        news: "News & market events",
        psychology: "Market psychology & risk management",
        balanced: "Balanced approach",
      },
      features: {
        title: "Features & Notifications",
        riskWarnings: {
          title: "Risk Warnings",
          description: "AI will remind about risks when needed",
        },
        marketUpdates: {
          title: "Market Updates",
          description: "Receive periodic market information",
        },
        learningMode: {
          title: "Learning Mode",
          description: "AI will explain terms and concepts",
        },
        confidenceThreshold: {
          title: "AI Confidence Threshold",
          description: "AI only gives advice when confidence ≥",
        },
      },
      dataManagement: {
        title: "Data Management",
        exportData: {
          title: "Export Data",
          description: "Download all personal data",
          button: "Export",
        },
        resetKnowledge: {
          title: "Reset AI Knowledge",
          description: "Clear learning history, start fresh",
          button: "Reset",
        },
        deleteData: {
          title: "Delete All Data",
          description: "This action cannot be undone",
          button: "Delete",
        },
      },
      saveChanges: "Save Changes",
      saved: "Saved",
      restoreDefaults: "Restore Defaults",
    },
    analysis: {
      analyzing: "AI is analyzing",
      overallScore: "Overall Score",
      fundamental: "Fundamental",
      technical: "Technical",
      risk: "Risk",
      ruleViolations: "Rule violation warning:",
      recommendations: "AI Recommendations",
      checklist: "Investment Checklist",
      pass: "OK",
      fail: "Not Done",
      warning: "Needs Review",
      needsReview: "Needs Review",
      notCompleted: "Not Completed",
      analyzeButton: "Analyze",
      accordingToFormula: "according to your formula",
    },
    coins: {
      price: "Price",
      change24h: "24h",
      volume: "Volume 24h",
      marketCap: "Market Cap",
      volatility: "Volatility",
      riskLevel: "Risk",
      socialTrend: "Social",
      askAIMore: "Ask AI More",
      details: "Details",
      chartTitle: "7-day Price Chart",
      analysis: "Overall Analysis",
      low: "low",
      medium: "medium",
      high: "high",
      bullish: "bullish",
      bearish: "bearish",
      neutral: "neutral",
    },
  },
}

export function useTranslation(language: Language = "vi") {
  return translations[language]
}
