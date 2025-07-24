import { useState } from 'react'
import { Check, ArrowLeft, Share, QrCode, Camera, CreditCard } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

function App() {
  const [currentScreen, setCurrentScreen] = useState(1)

  const QRScannerScreen = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <ArrowLeft className="w-6 h-6" />
        <h1 className="text-lg font-semibold">Scan to Pay</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Scanner Area */}
      <div className="flex-1 px-4 py-8">
        <div className="relative mx-auto w-80 h-80 bg-black/20 rounded-2xl overflow-hidden">
          {/* Camera Viewfinder */}
          <div className="absolute inset-4 border-2 border-white/50 rounded-xl">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-lg"></div>
          </div>
          
          {/* QR Code Preview */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <div className="text-center">
                <QrCode className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                <div className="text-xs text-blue-600 font-medium">Alipay+</div>
                <div className="text-xs text-gray-600">ToastBox</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/90 text-lg">Point your camera at the QR code</p>
          <p className="text-white/70 text-sm mt-2">Make sure the QR code is within the frame</p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-4 pb-8">
        <div className="flex justify-center gap-8">
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Camera className="w-6 h-6" />
            </div>
            <span className="text-xs">Gallery</span>
          </button>
        </div>
      </div>
    </div>
  )

  const PaymentConfirmScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm bg-blue-600 text-white">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-4">
        <div className="flex items-center justify-between">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Confirm Payment</h1>
          <div className="w-6 h-6"></div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Merchant Info */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">TB</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">ToastBox</h3>
              <p className="text-sm text-gray-600">313@Somerset, Singapore</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="px-2 py-1 bg-blue-100 rounded text-xs text-blue-700 font-medium">
                  Alipay+
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Amount */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-gray-900 mb-2">S$12.80</div>
          <p className="text-gray-600">Payment Amount</p>
        </div>

        {/* Payment Method */}
        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Touch 'n Go eWallet</p>
                <p className="text-sm text-gray-600">Balance: S$156.40</p>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
          </div>
        </Card>

        {/* Transaction Details */}
        <Card className="p-4 mb-8">
          <h4 className="font-medium text-gray-900 mb-3">Transaction Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Merchant</span>
              <span className="text-gray-900">ToastBox</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount</span>
              <span className="text-gray-900">S$12.80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="text-gray-900">eWallet</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
          onClick={() => setCurrentScreen(3)}
        >
          Pay S$12.80
        </Button>
      </div>
    </div>
  )

  const PaymentSuccessScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm bg-blue-600 text-white">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-4">
        <div className="flex items-center justify-between">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Payment Successful</h1>
          <div className="w-6 h-6"></div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600">Your payment has been processed</p>
        </div>

        {/* Transaction Summary */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">TB</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">ToastBox</h3>
              <p className="text-sm text-gray-600">313@Somerset, Singapore</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="px-2 py-1 bg-blue-100 rounded text-xs text-blue-700 font-medium">
                  Alipay+
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-gray-900">S$12.80</span>
              <span className="text-sm text-gray-600">24 Jan 2025, 9:41 AM</span>
            </div>
            <div className="text-sm text-gray-600">
              Transaction ID: TNG240124094123456
            </div>
          </div>
        </Card>

        {/* CIMB VISA INFINITE Marketing Banner */}
        <Card className="p-4 mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">CIMB</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">CIMB VISA INFINITE</h4>
              <p className="text-sm text-white/90 mb-2">Exclusive for Singapore users</p>
              <div className="text-xs text-white/80">
                • Unlimited airport lounge access
                • 5% cashback on dining
                • No annual fee for first year
              </div>
            </div>
          </div>
          <Button className="w-full mt-4 bg-white text-purple-600 hover:bg-gray-100">
            Apply Now
          </Button>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button variant="outline" className="py-3">
            <Share className="w-4 h-4 mr-2" />
            Share Receipt
          </Button>
          <Button className="py-3 bg-blue-600 hover:bg-blue-700">
            Done
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center py-2">
            <div className="w-6 h-6 bg-blue-600 rounded mb-1"></div>
            <span className="text-xs text-blue-600">Home</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <QrCode className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">Scan</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <CreditCard className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">Cards</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <div className="w-6 h-6 bg-gray-400 rounded-full mb-1"></div>
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-sm mx-auto bg-white shadow-2xl">
      {/* Screen Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 rounded-full px-4 py-2">
        <div className="flex gap-2">
          {[1, 2, 3].map((screen) => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentScreen === screen ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Screen Content */}
      {currentScreen === 1 && <QRScannerScreen />}
      {currentScreen === 2 && <PaymentConfirmScreen />}
      {currentScreen === 3 && <PaymentSuccessScreen />}

      {/* Screen Labels */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 rounded-full px-4 py-2 text-white text-sm">
        {currentScreen === 1 && "1. QR Scanner"}
        {currentScreen === 2 && "2. Payment Confirmation"}
        {currentScreen === 3 && "3. Payment Success"}
      </div>
    </div>
  )
}

export default App