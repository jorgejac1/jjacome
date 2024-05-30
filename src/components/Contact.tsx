import React, { useState } from 'react';
import { Box, Heading, ScaleFade, FormControl, FormLabel, Input, Textarea, Button, Text, Icon, HStack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      e.target as HTMLFormElement,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });

    e.currentTarget.reset();
  };

  return (
    <ScaleFade in={inView} initialScale={0.9}>
      <Box
        id="contact"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        ref={ref}
        px={4}
        textAlign="center"
        bg="black"
        color="white"
        py={10}
        width="100%"
        background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('/assets/contactbg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Heading as="h1" mb={4} color="white">
          Contact
        </Heading>
        {!formSubmitted && (
          <Text color="white" mb={4}>
            Get in touch or shoot me an email directly on <a href="mailto:jorgejac97@gmail.com">jorgejac97@gmail.com</a>
          </Text>
        )}
        {formSubmitted ? (
          <HStack spacing={3}>
            <Icon as={CheckCircleIcon} color="green.500" w={10} h={10} />
            <Text color="white" fontSize="xl" mb={0}>
              Thank you for reaching out! Your message was sent successfully.
            </Text>
          </HStack>
        ) : (
          <Box
            as="form"
            width={{ base: "100%", md: "50%" }}
            p={4}
            bg="rgba(0, 0, 0, 0.6)"
            boxShadow="lg"
            borderRadius="md"
            onSubmit={sendEmail}
          >
            <FormControl id="name" mb={4} isRequired>
              <FormLabel color="white">Your Name</FormLabel>
              <Input type="text" name="name" placeholder="Enter your name" />
            </FormControl>
            <FormControl id="email" mb={4} isRequired>
              <FormLabel color="white">Your Email</FormLabel>
              <Input type="email" name="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="message" mb={4} isRequired>
              <FormLabel color="white">Your Message</FormLabel>
              <Textarea name="message" placeholder="Enter your message" />
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Send Message
            </Button>
          </Box>
        )}
      </Box>
    </ScaleFade>
  );
};

export default Contact;
