import React, { createRef, useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { observer } from 'mobx-react-lite'

import { Container, CustomButton, CustomInput } from '~/components'
import I18n from '~/i18n'
import { SignUpScreenProps } from '~/navigation/interfaces/auth'
import { useStore } from '~/store'
import { Images } from '~/utils'
import Typography from '~/utils/Typographys'

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { authStore } = useStore()

  const secondInput = createRef<TextInput>()
  const thirdInput = createRef<TextInput>()
  const fourthInput = createRef<TextInput>()

  const [value, setValue] = useState<string | undefined>()

  const handleTermsPress = useCallback(() => navigation.navigate('Terms'), [])

  const handleCreateButtonPress = useCallback(() => authStore.setAccessToken(), [])

  useEffect(() => {
    navigation.setParams({
      title: I18n.t('signUpHeaderTitle'),
      subtitle: I18n.t('signUpHeaderSubtitle'),
    })
  }, [navigation])

  return (
    <Container contentContainerStyle={styles.container}>
      <View>
        <CustomInput
          value={value}
          icon={Images.PERSON}
          label={I18n.t('firstName')}
          onChangeText={setValue}
          returnKeyType="next"
          onSubmitEditing={() => secondInput.current?.focus()}
        />
        <CustomInput
          icon={Images.PERSON}
          label={I18n.t('lastName')}
          ref={secondInput}
          returnKeyType="next"
          onSubmitEditing={() => thirdInput.current?.focus()}
        />
        <CustomInput
          value={value}
          icon={Images.EMAIL}
          label={I18n.t('emailAddress')}
          onChangeText={setValue}
          ref={thirdInput}
          returnKeyType="next"
          onSubmitEditing={() => fourthInput.current?.focus()}
        />
        <CustomInput icon={Images.LOCK} label={I18n.t('password')} returnKeyType="done" ref={fourthInput} />
      </View>
      <View>
        <TouchableOpacity onPress={handleTermsPress}>
          <Text style={styles.footer}>
            {I18n.t('signUpFooter')}
            <Text numberOfLines={1} style={styles.footerLink}>
              {I18n.t('signUpFooterLink')}
            </Text>
            <Text>.</Text>
          </Text>
        </TouchableOpacity>
        <CustomButton label={I18n.t('createAccount')} onPress={handleCreateButtonPress} />
      </View>
    </Container>
  )
}

type Styles = {
  container: ViewStyle
  footer: TextStyle
  footerLink: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'space-between',
    marginBottom: 20,
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
