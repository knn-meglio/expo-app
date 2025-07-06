import { Button } from "@/components/atoms/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/atoms/ui/form";
import { Input } from "@/components/atoms/ui/input";
import { useAuth } from "@/hooks/customs/useAuth";
import { LoginForm, LoginSchema } from "@/libs/validations/loginSchema";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, Text, View } from "react-native";

const LoginScreen = () => {
  const router = useRouter();
  const { login } = useAuth();
  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "user@mail.com",
      password: "123123123",
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log("data => ", data);
    login(data.email);

    // router.push("/(tabs)");
    // Toast.show({
    //   type: "success",
    //   text1: "This is some something 👋",
    // });
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className={cn("w-full flex flex-col gap-6 p-4")}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex flex-col gap-6">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            onChangeText={field.onChange}
                            value={field.value}
                            onBlur={field.onBlur}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          onChangeText={field.onChange}
                          value={field.value}
                          onBlur={field.onBlur}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Form>
              <Button onPress={form.handleSubmit(onSubmit)} className="w-full">
                <Text>Login</Text>
              </Button>
            </View>
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
