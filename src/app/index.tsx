import { AlertTriangle, Terminal } from "@/assets/icons";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/atoms/ui/alert";
import { Button } from "@/components/atoms/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/ui/dialog";
import { PlatformPressable } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <ThemeToggle />

      <PlatformPressable className="bg-blue-500 p-4 rounded-md">
        <Text className="text-white">Click me</Text>
      </PlatformPressable>

      <Alert icon={Terminal} className="max-w-xl">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can use a terminal to run commands on your computer.
        </AlertDescription>
      </Alert>
      <Alert icon={AlertTriangle} variant="destructive" className="max-w-xl">
        <AlertTitle>Danger!</AlertTitle>
        <AlertDescription>
          High voltage. Do not touch. Risk of electric shock. Keep away from
          children.
        </AlertDescription>
      </Alert>

      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Text>Edit Profile</Text>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>
                <Text>OK</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}
