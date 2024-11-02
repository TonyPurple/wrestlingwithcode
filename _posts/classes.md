---
title: "Clean Code in Modern Web Development: Adapting Class Principles for Today's Frontend"
excerpt: "How traditional Clean Code principles evolve in the age of React, Next.js, and TypeScript"
coverImage: "/assets/blog/classes/cover.jpg"
date: "2024-11-02T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/classes/cover.jpg"
---

So, I've been diving deeper into Robert C. Martin's "Clean Code," and this time, we think about how to apply Uncle Bob's thoughts on classes to our day to day.

## Introduction

The landscape of web development has transformed dramatically since Robert C. Martin first wrote "Clean Code." While the book's core principles remain valuable, their application has evolved significantly in the context of modern frontend frameworks and functional programming patterns. Let's explore how these principles adapt to contemporary web development.

## Single Responsibility Principle and Evolution

The Single Responsibility Principle (SRP) takes on new meaning in the context of modern web applications. Instead of thinking about classes having one reason to change, we now consider:

### Component-Level Responsibilities

```tsx
// ❌ Too many responsibilities
const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);

  // Fetching logic
  // Order processing logic
  // Analytics logic
  // Complex UI rendering
};

// ✅ Split into focused components with custom hooks
const UserDashboard = () => {
  const { userData } = useUser();
  const { orders } = useOrders();

  return (
    <>
      <UserProfile data={userData} />
      <OrderHistory orders={orders} />
    </>
  );
};
```

### Hook-Level Responsibilities

```tsx
// ❌ Hook doing too much
const useUserData = () => {
  // Authentication
  // Profile management
  // Preferences
  // Activity tracking
};

// ✅ Separated concerns
const useAuth = () => {
  /* Authentication logic */
};
const useProfile = () => {
  /* Profile management */
};
const usePreferences = () => {
  /* User preferences */
};
```

## Cohesion Through Composition

Rather than class-based cohesion, modern web development achieves cohesion through component composition and custom hooks:

```tsx
// Composing focused components
const ProductPage = () => (
  <ProductLayout>
    <ProductHeader />
    <ProductGallery />
    <ProductDetails />
    <RelatedProducts />
  </ProductLayout>
);

// Composing hooks for complex logic
const useProductActions = () => {
  const { addToCart } = useShoppingCart();
  const { addToWishlist } = useWishlist();
  const { track } = useAnalytics();

  return {
    purchaseProduct: (product) => {
      addToCart(product);
      track("purchase_initiated", product);
    },
    saveForLater: (product) => {
      addToWishlist(product);
      track("saved_to_wishlist", product);
    },
  };
};
```

## State Management and Dependencies

Modern applications handle dependencies and state management differently than traditional OOP:

```tsx
// Context for dependency injection
const ApiContext = createContext<Api>(null);

// Custom hook for consuming the API
const useApi = () => {
  const api = useContext(ApiContext);
  if (!api) throw new Error("useApi must be used within ApiProvider");
  return api;
};

// Provider pattern for dependency injection
const App = () => (
  <ApiProvider api={new Api()}>
    <ThemeProvider theme={lightTheme}>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  </ApiProvider>
);
```

## TypeScript Interface-Based Design

TypeScript brings strong typing to JavaScript while maintaining flexibility:

```tsx
// Define clear interfaces
interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
}

interface UserPreferences {
  theme: "light" | "dark";
  notifications: boolean;
  language: string;
}

// Type-safe components
const UserSettings: React.FC<{
  user: User;
  onUpdate: (preferences: UserPreferences) => Promise<void>;
}> = ({ user, onUpdate }) => {
  // Implementation
};
```

## Modern Data Flow and State Updates

Clean data flow in modern web apps often involves unidirectional data flow and immutable updates:

```tsx
// Using reducers for predictable state updates
type Action =
  | { type: "SET_USER"; payload: User }
  | { type: "UPDATE_PREFERENCES"; payload: UserPreferences }
  | { type: "LOGOUT" };

const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "UPDATE_PREFERENCES":
      return {
        ...state,
        user: { ...state.user, preferences: action.payload },
      };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
```

## Adapting Clean Architecture for Frontend

Modern frontend architecture often follows clean architecture principles through layers:

```tsx
// Domain layer - core business logic
interface OrderService {
  placeOrder(items: CartItem[]): Promise<Order>;
  calculateTotal(items: CartItem[]): Money;
}

// Application layer - use cases
const useCheckout = () => {
  const orderService = useOrderService();
  const [loading, setLoading] = useState(false);

  const checkout = async (items: CartItem[]) => {
    setLoading(true);
    try {
      const order = await orderService.placeOrder(items);
      return order;
    } finally {
      setLoading(false);
    }
  };

  return { checkout, loading };
};

// UI layer - presentation
const CheckoutButton: React.FC<{ items: CartItem[] }> = ({ items }) => {
  const { checkout, loading } = useCheckout();

  return (
    <Button onClick={() => checkout(items)} disabled={loading}>
      {loading ? "Processing..." : "Checkout"}
    </Button>
  );
};
```

## Testing in Modern Web Development

Clean code principles influence how we approach testing in modern web apps:

```tsx
// Testing hooks
describe("useCheckout", () => {
  it("handles successful checkout", async () => {
    const { result } = renderHook(() => useCheckout());

    await act(async () => {
      await result.current.checkout(mockItems);
    });

    expect(result.current.loading).toBe(false);
  });
});

// Testing components
describe("CheckoutButton", () => {
  it("displays loading state during checkout", async () => {
    render(<CheckoutButton items={mockItems} />);

    fireEvent.click(screen.getByText("Checkout"));

    expect(screen.getByText("Processing...")).toBeInTheDocument();
  });
});
```

## Practical Tips for Writing Clean JavaScript Components and Hooks

To apply Uncle Bob’s principles to JavaScript and TypeScript, keep the following in mind:

- Split Overloaded Components: If a React component has multiple responsibilities, break it into smaller, single-purpose components or hooks. For example, if a form component handles data fetching, validation, and submission, consider creating useFetch, useFormValidation, and useSubmit hooks to encapsulate each responsibility.
- Refactor with Small, Iterative Changes: Refactor incrementally, testing changes in small steps. For example, moving a complex function from a component into a utility file or custom hook, then checking the component’s functionality, ensures smoother transitions.
- Prioritize Readability over Line Count: Long code doesn’t necessarily mean unclean code. Well-organized React code with ample space and descriptive variable names often improves readability over terse, condensed code.

## The Bottom Line

While the fundamental principles of Clean Code remain relevant, their implementation has evolved significantly in modern web development. Today's clean code emphasizes:

- Functional composition over class inheritance
- Custom hooks for logic reuse
- Strong typing with TypeScript
- Component-based architecture
- Unidirectional data flow
- Immutable state updates
- Declarative UI patterns

By understanding how to adapt these principles to modern web development patterns, we can build maintainable, scalable applications that stand the test of time.

Remember: The goal isn't to blindly follow rules from the past, but to understand their underlying wisdom and apply it meaningfully to today's challenges.

_Stay tuned for Chapter 11: Systems._
