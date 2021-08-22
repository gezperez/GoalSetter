import React, { useCallback } from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import * as yup from 'yup'

import { Container, CustomButton, CustomInput } from '~/components'
import I18n from '~/i18n'
import { SignUpScreenProps } from '~/navigation/interfaces/auth'
import { useStore } from '~/store'
import { Images } from '~/utils'
import Typography from '~/utils/Typographys'

const loginValidationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Please enter valid email').required('Email Address is required'),
  password: yup
    .string()
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { authStore } = useStore()

  const handleTermsPress = useCallback(() => navigation.navigate('Terms'), [])

  const handleCreateButtonPress = useCallback(async () => {
    const response = await Promise.resolve(true)

    if (response) {
      authStore.setAccessToken()
    }
  }, [])

  return (
    <Container>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={handleCreateButtonPress}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <View>
              <CustomInput
                icon={Images.PERSON}
                label={I18n.t('firstName')}
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                returnKeyType="next"
                error={errors.firstName}
                accessibilityLabel={'firstInput'}
              />
              <CustomInput
                icon={Images.PERSON}
                label={I18n.t('lastName')}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                returnKeyType="next"
                error={errors.lastName}
                accessibilityLabel={'secondInput'}
              />
              <CustomInput
                icon={Images.EMAIL}
                label={I18n.t('emailAddress')}
                value={values.email}
                onChangeText={handleChange('email')}
                returnKeyType="next"
                keyboardType="email-address"
                error={errors.email}
                accessibilityLabel={'thirdInput'}
              />
              <CustomInput
                icon={Images.LOCK}
                label={I18n.t('password')}
                value={values.password}
                onChangeText={handleChange('password')}
                returnKeyType="done"
                error={errors.password}
                accessibilityLabel={'fourthInput'}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={handleTermsPress}
                accessibilityLabel={I18n.t('accessibilityLabel.termsButton')}
                testID={I18n.t('accessibilityLabel.termsButton')}
              >
                <Text style={styles.footer}>
                  {I18n.t('signUpFooter')}
                  <Text numberOfLines={1} style={styles.footerLink}>
                    {I18n.t('signUpFooterLink')}
                  </Text>
                  <Text>.</Text>
                </Text>
              </TouchableOpacity>
              <CustomButton label={I18n.t('createAccount')} onPress={handleSubmit} accessibilityLabel={'submit'} />
            </View>
          </View>
        )}
      </Formik>
    </Container>
  )
}

type Styles = {
  form: ViewStyle
  footer: TextStyle
  footerLink: TextStyle
}

const styles = StyleSheet.create<Styles>({
  form: {
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  footer: {
    ...Typography.footer,
    marginVertical: 20,
    marginHorizontal: 25,
  },
  footerLink: {
    ...Typography.footerLink,
  },
})

export default observer(SignUpScreen)
