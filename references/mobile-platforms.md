# Mobile Platform Conventions: iOS, Android, Flutter & React Native

A high-quality mobile interface feels native to the user's operating system. Blatantly porting web conventions (such as desktop hover menus or fixed web headers) produces an alien and frustrating mobile experience.

---

## 1. iOS Human Interface Guidelines (HIG) vs. Android Material Design 3 (M3)

| Dimension | iOS (Human Interface Guidelines) | Android (Material Design 3) |
|---|---|---|
| **Design Philosophy** | Deference, clarity, depth; content pushes back UI chrome | Expressive, personal, adaptive color (Material You), elevation |
| **System Typography** | SF Pro (Variable grotesque sans) | Roboto / Google Sans / Product Sans |
| **Top Navigation** | Large Title collapsing to inline title on scroll; left chevron `< Back` | Top App Bar with hamburger or back arrow `←`; title aligned left |
| **Primary Actions** | Top-right navigation action or bottom sticky toolbar | Floating Action Button (FAB) or bottom right anchor |
| **Bottom Navigation** | Tab Bar (3–5 tabs, translucent blur, icons with glyph fills) | Navigation Bar (3–5 destinations, pill indicator on active tab) |
| **Dialogs & Sheets** | Action Sheets (anchored bottom, rounded cancel button), Alert Dialogs | Bottom Sheet (tonal elevation), M3 Dialogs (high radius) |
| **Back Navigation** | Edge swipe-back gesture mandatory | Hardware/system back gesture (left/right edge swipe) |
| **Haptic Feedback** | Subtle Taptic Engine patterns (`UIImpactFeedbackGenerator`) | Haptic vibrations (`HapticFeedbackType`) |

---

## 2. Jetpack Compose Architecture (Android)

Follow Compose best practices for modern Android UI:

```kotlin
// Example: Accessible Account Card in Jetpack Compose
@Composable
fun AccountSummaryCard(
    accountName: String,
    accountNumber: String,
    balance: String,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Column(
            modifier = Modifier.padding(20.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = accountName,
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    text = accountNumber,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.outline
                )
            }
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = balance,
                style = MaterialTheme.typography.headlineMedium.copy(fontWeight = FontWeight.Bold),
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}
```

---

## 3. Flutter Platform Adaptation

Use Flutter's adaptive widgets to render native controls automatically:

```dart
// Adapts between CupertinoNavigationBar (iOS) and AppBar (Android)
AppBar.adaptive(
  title: Text("Accounts"),
  actions: [
    IconButton(
      icon: Icon(Icons.notifications_outlined),
      onPressed: () {},
    )
  ],
)
```

### Safe Area & Insets:
- Always wrap screen layouts with `SafeArea` to avoid clipping into notch, dynamic island, or gesture indicator bar.
- On scroll views, apply bottom content padding: `padding: EdgeInsets.only(bottom: MediaQuery.of(context).padding.bottom + 16)`.

---

## 4. React Native Specifics

- Use `react-native-safe-area-context` to safely handle notches and system navigation bars.
- Use `KeyboardAvoidingView` with `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}` to prevent the software keyboard from obscuring inputs.
- Ensure hitSlop on small touch targets: `hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}` to guarantee a 44pt touch area.
